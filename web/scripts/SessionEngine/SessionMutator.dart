import "../SBURBSim.dart";
//this should handle the most severe of the Gnosis Tiers: The Waste Tier
//these are permanent modifications to sessions and their behavior
//while the lesser shit that are one off things will be in the GainGnosis scenes themselves. (such as writing faqs)
class SessionMutator {

  static SessionMutator _instance;
  num timeTillReckoning = 0;
  num reckoningEndsAt = -15;
  bool ectoBiologyStarted = false;
  num hardStrength = 1000;
  num minFrogLevel = 13;
  num goodFrogLevel = 20;
  int expectedGristContributionPerPlayer = 400;
  int minimumGristPerPlayer = 100; //less than this, and no frog is possible.
  num sessionHealth = 500;

  static getInstance() {
    if(_instance == null) _instance = new SessionMutator();
    return _instance;
  }

  SessionMutator() {
    _instance = this;
  }

  //when a session inits, it asks if any of it's vars should have different intial values (like hope shit)
  void syncToSession(Session s) {
    s.sessionHealth = this.sessionHealth;
    s.minimumGristPerPlayer = this.minimumGristPerPlayer;
    s.expectedGristContributionPerPlayer = this.expectedGristContributionPerPlayer;
    s.goodFrogLevel = this.goodFrogLevel;
    s.minFrogLevel = this.minFrogLevel;
    s.hardStrength = this.hardStrength;
    s.stats.ectoBiologyStarted = this.ectoBiologyStarted;
    s.reckoningEndsAt = this.reckoningEndsAt;
    s.timeTillReckoning = this.timeTillReckoning;
  }

  GameEntity spawnBlackQueen() {

  }

  //TODO have variables that session can query to see if it needs to have alt behavior

  //TODO have methods that are alt behavior for a variety of methods. like makeDead

  //the aspect clsses handle calling these.  these are called when waste tier
  //is reached for a specific aspect

  void blood(Session s) {
      /*
          TODO:
          * all players have trickster levels of sanity
          * If scratched, your guardians stats are added to yours.
          *  All stats are averaged, then given back to party.
          *  Session Mutator: pale  quadrant chats happen constantly, even if not quadranted.
          *  once npc update, all npcs are set to "ally" state, even things that are not normally possible.
          *  All players have candy red blood.
          *  new players are allowed to enter session

       */
  }

  void mind(Session s) {
    /*
      TODO:
        * Yellow Yard like thing prints out immediatly upon reaching this tier. Player shown, not me.
        * TODO: what else fits here, don't want it to just literally be a yellow yard, these wastes suck compared to me
             *so instead of restraint, they let ANYTHING happen.  but still Observer choice?
             *  or are some things observer choice and some things the Waste chooses?
             *  peasant rail gun
             *  kill all denizens pre-entry
             *  kill all npcs pre-entry
             *  kill entire party pre-entry
             *  god tier entire party pre-entry
             *  prototype all players pre-entry
             *  shoosh pap all murderers pre-entry
             *  etc
     */
  }

  void rage(Session s) {
    /*
        TODO:
        All players are murder mode, all players are god tier, all players hate each other.
        One or more creators or wranglers are spawned in game, and they hate US most of all.

        Session paused for Observer to make a character.  Observer is also hated most.

        if observer dies.  Players leave session and it just ends.

        Everyone can do shenanigans.  pen15 activated at random.

        if KR is killed images = pumpkin

        if kr is killed, everyone is robots

        if JR is killed, session crash

        if abj is killed, all players die

        kill brope, all but one player dies

        kill PL lands get rerolled/fucked up eventually
     */
  }

  //lol, can't just call it void cuz protected word
  void voidStuff(Session s) {
    /*
        TODO:
          * reroll seed.  rerun session, but NEVER print anything, not even in the void.
          * print ending
          * if Yellow Yard happens, even the choices are blanked (but you can still pick them.)
          *

       */
  }

  void time(Session s) {
      /*
          TODO:
          * Timeline replay.  Redo session until you get it RIGHT. Everyone lives, full frog.
          *   Create players, then change seed. shuffle player order, etc.
          *   line about them killing their past self and replacing them. so time player might start god tier and shit.
          *   "go" button similar to scratch before resetting.

       */
  }

  void heart (Session s) {
      /*
        TODO
         * everyones classpects are randomized mid sim
         * everyones living dream selves are separate players with old claspects
         * more quadrant chat even if no quadrant?
       */
  }

  void breath(Session s) {
      /*
        TOOD:
        * available players is always all players.
        * all quest chains are active (npc shit)
        * *uses true random instead of seed, for freedom from story
       */
  }

  void light(Session s) {
    /*TODO
        *EVERything is displayed, not just void.
          *   how to do this with code not being js anymore?
          *   can i co-opt the console printouts to put on screen?
        * all players are VERY LUCKY
        * maybe gives everyone almost waste level gnosis...what else?
        * literal spotlight when rendered, all players set to unavailable except light player, light player is always available
     */
  }

  void space(Session s) {
    /*
          TODO:
          * Cccccccombo sessions.   (with "go" button to keep it from being infinite)
            *   If frog, combo into new session (whether sick or full),
             *   if no frog and can scratch, combo into scratch
             *   gets WEIRD if you enter a purple frog (extra squiddle boss fight with savior?)
     */
  }

  void hope(Session s) {
    /* TODO
        * Facts about session is denised.
        * Ppl hope player likes are alive,
        * ppl they dislike are erased entirely (not even in player list)
        * session health is 111111
        * rings are owned by hope player
        * royalty only prototyped weak shit
        * nobody is murder mode, etc
        * black queen's name gets replaced with "3 salamanders in a trench coat". she is nerfed.
        *
     */
  }

  void life(Session s) {
    /*
        TODO:
          * Everyone is trickster
          * makeDead does nothing anymore
          * anybody dead (including enemies) is brought back
          *
     */
  }

  void doom(Session s) {
    /*
      TODO:
        * all stats flip
          * healing hurts, hurting heals
          * all stats are multiplied by -1 so high is bad and low is good.
          * all living players are catatonic.  only the dead are avaiable and returned by getLivingPlayers
          * doomed time clones aren't doomed
     */
  }


}