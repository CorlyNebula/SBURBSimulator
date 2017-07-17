


//if jack is much stronger than a player, insta-kills them.
//can fight 0 or more players at once. (if zero, he just kills nonplayers.)
//total playerStrength must be at least half of his to survive.
class JackRampage {
	var session;
	bool canRepeat = true;	


	JackRampage(this.session) {}


	dynamic trigger(playerList){
		//print("Jack is: " + this.session.jackStrength  + " and King is: " + this.session.kingStrength);
		return this.session.jack.crowned != null && this.session.jack.getStat("currentHP") > 0 && !this.session.jack.dead; //Jack does not stop showing us his stabs.
	}
	dynamic getStabList(){
		List<dynamic> potentialPlayers = [];
		for(num i = 0; i<this.session.availablePlayers.length; i++){
			var p = this.session.availablePlayers[i];
			if(p.class_name != "Witch"){
				potentialPlayers.push(p); //don't make a big deal out of it, but jack doesn't want to hurt the witch. familiar loyalty, yo.
				//this is actually a bad thing, too, cause it means the witch's OP sprite doesn't get to kick Jack's ass.
			}
		}
		var numStabbings = getRandomInt(1,Math.min(4,potentialPlayers.length));
		//print("Number stabbings is: " + numStabbings);
		List<dynamic> ret = [];
		if(potentialPlayers.length == 0){
			return ret;
		}
		ret.push(getRandomElementFromArray(potentialPlayers)); //used to get slowest player, but too many perma deaths happened.
		var friends = ret[0].getFriendsFromList(potentialPlayers);
		if(friends.length == 0) return ret;
		//print("friends: " + friends.length);
		for(int i = 0; i<=numStabbings; i++){
			var f = getRandomElementFromArray(friends);
			//print(f);
			if(this.canCatch(f)) ret.push(f);

		}
		//var unique = Array.from(new Set(ret));  breaks IE because IE is a whiny little bitch.
		//var unique = [...new Set(ret)]  ;//IE ALSO bitches about this. Fucking IE.  I think it doesn't implement Sets. What the actual fuck.;
		var unique = uniqueArrayBecauesIEIsAWhinyBitch(ret);

		List<dynamic> ret = []; //add some sprites. this is literally the only other fight they are good for.
		for(num i = 0; i<unique.length; i++){
			ret.push(unique[i]);
			ret.push(unique[i].sprite);
			if(unique[i].sprite.name == "sprite") print("trying to stab somebody not in the medium yet in session: " + this.session_id);
		}
		return ret;
	}
	bool canCatch(victim){
			if(this.session.jack.getMobility() < victim.mobility) return false;
			if(victim.aspect == "Void" && victim.isVoidAvailable() && victim.power >50) return false;
			if(victim.aspect == "Space" && victim.power > 50){
				print("high level space player avoiding jack" + this.session.session_id);
				return false;  //god tier calliope managed to hide from a Lord of Time. space players might not move around a lot, but that doesn't mean they are easy to catch.
			}
			print("jack found a stab victim" + this.session.session_id);
		return true;
	}
	void renderPrestabs(div, stabbings){
			num repeatTime = 1000;
			var divID = (div.attr("id")) + "_final_boss";
			var ch = canvasHeight;

			String canvasHTML = "<br><canvas id;='canvas" + divID+"' width='" +canvasWidth + "' height;="+ch + "'>  </canvas>";
			//div.append(canvasHTML);  //no. not if sprites can be here.
			//different format for canvas code
			var canvasDiv = querySelector("#canvas"+ divID);
			//poseAsATeam(canvasDiv, stabbings, 2000); //can't do this anymore, mighit be  a sprite in there.
		}
	dynamic renderContent(div){
		this.session.jackRampage = true;
		//div.append("<br>"+this.content());
		div.append("<br><img src = 'images/sceneIcons/jack_icon.png'> ");

		//jack finds 0 or more players.
		var stabbings = this.getStabList();
	//	if(stabbings.length > 1) print("Jack fighting more than one player: " + this.session.session_id);
		String ret = "";
		if(stabbings.length == 0){
			if(Math.seededRandom() > .5){
				ret += " Jack listlessly shows his stabs to a few Prospitian pawns. ";
				div.append(""+ret);
			}else{
				ret += " Jack listlessly shows his stabs to a few Dersite pawns. ";
				div.append(""+ret);
			}
			ret += " Bored of this, he decides to show his stabs to BOTH the Black and White Kings.  The battle is over. The Reckoning will soon start.";
			this.session.timeTillReckoning = 0;
			this.session.king.currentHP = -99999999;
			this.session.king.dead = true;
			print("jack starts reckoning " + this.session.session_id);
			div.append(""+ret);
			return ret;
		}else{


			if(stabbings[0].dreamSelf && !stabbings[0].isDreamSelf && Math.seededRandom() >.5){
				//jack kills the dream self instead of the active self. no strife. just death.
				//want to test out a dream self dying without active.
				//print("jack kills nonactive dream self: " + this.session.session_id);
				ret = "Jack has found the dream self of the " + stabbings[0].htmlTitleBasic() + ". He shows the sleeping body his stabs. The dream self is no longer available for revival shenanigans. ";
				div.append(""+ret);
				stabbings[0].dreamSelf = false;
				var snop = makeRenderingSnapshot(stabbings[0]);
				snop.causeOfDeath = "after being sleep stabbed by Jack";
				snop.isDreamSelf = true;
				this.session.afterLife.addGhost(snop);
			}else{
				this.setPlayersUnavailable(stabbings);
				ret = "Jack has caught the " + getPlayersTitlesBasic(stabbings) + ".  Will he show them his stabs? Strife!";
				div.append(""+ret);
				this.renderPrestabs(div, stabbings); //pose as a team BEFORE getting your ass handed to you.
				this.session.jack.strife(div, stabbings,0);
		}
			return;//make sure text is over image
		}

	}
	void setPlayersUnavailable(stabbings){
		for(num i = 0; i<stabbings.length; i++){
			removeFromArray(stabbings[i], this.session.availablePlayers);
		}
	}
	dynamic addImportantEvent(players){//TODO reimplement this for boss fights
		/*
		var current_mvp = findStrongestPlayer(this.session.players);
		for(num i = 0; i<players.length; i++){
			var player = players[i];
			if(player.isDreamSelf == true && player.godDestiny == false && player.godTier == false){
				return this.session.addImportantEvent(new PlayerDiedForever(this.session, current_mvp.power,player) );
			}
		}
		*/

	}
	dynamic content(){
		this.session.jackRampage = true;
		//jack finds 0 or more players.
		var stabbings = this.getStabList();
		String ret = "";
		if(stabbings.length == 0){
			if(Math.seededRandom() > .5){
				ret += " Jack listlessly shows his stabs to a few Prospitian pawns. ";
			}else{
				ret += " Jack listlessly shows his stabs to a few Dersite pawns. ";
			}
			ret += " Bored of this, he decides to show his stabs to BOTH the Black and White Kings.  The battle is over. The Reckoning will soon start.";
			this.session.timeTillReckoning = 0;
			return ret;
		}
		this.setPlayersUnavailable(stabbings);
		var partyPower = getPartyPower(stabbings);
		if(partyPower > this.session.jackStrength*5){
			ret += getPlayersTitles(stabbings) + " suprise Jack with stabbings of their own. He is DEAD. ";
			this.session.jackStrength =  -9999;
			this.levelPlayers(stabbings);
			ret += findDeadPlayers(this.session.players).length + " players are dead in the wake of his rampage. ";
		}else if(partyPower > this.session.jackStrength){
			ret += " Jack fails to stab " + getPlayersTitles(stabbings);
			ret += "  He goes away to stab someone else, licking his wounds. ";
			//TODO if one of them was a god tier, make their be a chance of him destroying one of the moons. kills all non active dream selves.
			if(Math.seededRandom()>.9){
				ret += " Bored of this, he decides to show his stabs to BOTH the Black and White Kings.  The battle is over. The Reckoning will soon start.";
				timeTillReckoning = 0;
			}
			this.minorLevelPlayers(stabbings);
			this.session.jackStrength += -10;
		}else if(partyPower == this.session.jackStrength){
			ret += " Jack is invigorated by the worthy battle with " + getPlayersTitles(stabbings);
			ret += " he retreats, for now, but with new commitment to stabbings. ";
			this.session.jackStrength += 10;
		}else{
			var alt = this.addImportantEvents(stabbings);
			if(alt && alt.alternateScene(div)){
				return;
			}else{
				ret += " Jack shows his stabs to " + getPlayersTitles(stabbings) + " until they die.  DEAD.";
				this.killPlayers(stabbings);
		}
		}
		return ret;
	}

}
