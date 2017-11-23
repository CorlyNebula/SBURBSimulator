import "../../../SBURBSim.dart";
import "Interest.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Culture extends InterestCategory {

    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[new AssociatedStat(Stats.SANITY, -1.0, true), new AssociatedStat(Stats.HEALTH, -1.0, true)]);
    @override
    List<String> handles1 = <String>["monochrome", "poetic", "majestic", "keen", "realistic", "serious", "theatrical", "haute", "beautiful", "priceless", "watercolor", "sensational", "highbrow", "refined", "precise", "melodramatic"];

    @override
    List<String> handles2 =  <String>["Dramatist", "Repository", "Museum", "Librarian", "Hegemony", "Hierarchy", "Davinci", "Renaissance", "Viniculture", "Treaty", "Balmoral", "Beauty", "Business"];

    @override
    List<String> levels = <String>["APPRENTICE ARTIST", "CULTURE BUCKAROO"];

    @override
    List<String> interestStrings =  <String>["Drawing", "Painting", "Documentaries", "Fan Art", "Graffiti", "Theater", "Fine Art", "Literature", "Books", "Movie Making"];


    Culture() :super(2, "Culture", "cultured", "pretentious");

    @override
    void initializeItems() {
        items = new WeightedList<Item>()
            ..add(new Item("Can of Spray Paint",<ItemTrait>[ItemTraitFactory.PRETTY, ItemTraitFactory.METAL]))
            ..add(new Item("Sensible Chuckles Magazine",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.CLASSY,ItemTraitFactory.FUNNY,ItemTraitFactory.BOOK]))

            ..add(new Item("Gentleman's Razor",<ItemTrait>[ItemTraitFactory.RAZOR, ItemTraitFactory.METAL,ItemTraitFactory.EDGED]))
            ..add(new Item("How To Draw Manga",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.CLASSY, ItemTraitFactory.BOOK]))
            ..add(new Item("Painting of a Horse Boxing a Football Player",<ItemTrait>[ItemTraitFactory.PRETTY, ItemTraitFactory.COOLK1D, ItemTraitFactory.PAPER]))
            ..add(new Item("Collection of Classical Works",<ItemTrait>[ItemTraitFactory.CLASSY, ItemTraitFactory.PAPER]))
            ..add(new Item("Documentary on Horses",<ItemTrait>[ItemTraitFactory.CLASSY, ItemTraitFactory.PLASTIC, ItemTraitFactory.COOLK1D]))
            ..add(new Item("Paint Set",<ItemTrait>[ItemTraitFactory.PRETTY, ItemTraitFactory.CLASSY]))
            ..add(new Item("Shaving Cream",<ItemTrait>[ItemTraitFactory.ONFIRE, ItemTraitFactory.CLASSY, ItemTraitFactory.METAL]))
            ..add(new Item("Classy Suit",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.CLASSY]))
            ..add(new Item("The Fatherly Gent's Shaving Almanac ",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.CLASSY, ItemTraitFactory.BOOK]));
    }

    @override
    void initializeThemes() {
        addTheme(new Theme(<String>["Museums","Sculpture","Paintings", "Art", "Refinement"])
            ..addFeature(FeatureFactory.SILENCE, Feature.MEDIUM)
            ..addFeature(FeatureFactory.STUDIOUSFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("Catch the Thief", [
                new Quest("The ${Quest.PLAYER1} visits a beautiful ${Quest.PHYSICALMCGUFFIN} Museum, only to discover that its walls are practically bare! The ${Quest.CONSORT} curator is apologetic, and explains that each night a new piece goes missing. The ${Quest.PLAYER1} agrees to catch the thief, art is for everyone! "),
                new Quest(" The ${Quest.PLAYER1} has almost fallen asleep during their latest ${Quest.PHYSICALMCGUFFIN} Museum stakeout, when the thief arrives! It looks to be a ${Quest.DENIZEN} minion! After a brief scuffle, it is defeated. They drop various pieces of art along with the standard amount of grist. The museum is saved! "),
                new Quest("The ${Quest.PLAYER1} attends a fancy gala in their honor, hosted in the ${Quest.PHYSICALMCGUFFIN} Museum itself.  ${Quest.CONSORT}s quietly ${Quest.CONSORTSOUND} and exchange pleasantries. It sure is nice to be recognized by high society! The ${Quest.PHYSICALMCGUFFIN} Museum offers them a less valuable artifact as a small token of their thanks.  "),
            ],  new ItemReward(items), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);


        addTheme(new Theme(<String>["Theater","Stages","Curtains", "Audiences", "Thespians", "Actors", "Plays"])
            ..addFeature(FeatureFactory.SWEATSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.ENERGIZINGFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.LAUGHINGSOUND, Feature.LOW)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CLAPPINGSOUND, Feature.HIGH)
            ..addFeature(new PreDenizenQuestChain("Perform the Play", [
            new Quest("The ${Quest.PLAYER1} finds a troupe of dejected looking ${Quest.CONSORT}s. Apparently they want to put on a famous ${Quest.CONSORT} play called 'The ${Quest.MCGUFFIN} ${Quest.PHYSICALMCGUFFIN}', but have no one to play the titular role!  Does the ${Quest.PLAYER1} have what it takes to bring the iconic role to life? "),
                new Quest("The ${Quest.PLAYER1} is practicing their lines for the upcoming performance of 'The ${Quest.MCGUFFIN.toUpperCase()} ${Quest.PHYSICALMCGUFFIN.toUpperCase()}'. Man, who would have thought a ${Quest.PHYSICALMCGUFFIN} would have so many different emotions! "),
                new Quest("It's finally time for performance of the 'The ${Quest.MCGUFFIN.toUpperCase()} ${Quest.PHYSICALMCGUFFIN.toUpperCase()}'. The audience is moved to tears and ${Quest.CONSORTSOUND}ing at the ${Quest.PLAYER1} stirring performance as the ${Quest.PHYSICALMCGUFFIN}. "),
            ], new FraymotifReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);

        //the sock ruse was a distaction
        addTheme(new Theme(<String>["Class","Decorum","Fancy Shit", "Manners", "Good Taste", "Artistocrats", "Debutantes", "Barons", "Lords", "Ladies", "Nobles"])
            ..addFeature(FeatureFactory.SPICYSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.SWEETSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.BAKEDBREADSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.DECEITSMELL, Feature.LOW)
            ..addFeature(FeatureFactory.RUSTLINGSOUND, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CALMFEELING, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("Attend the Dinner Party", [
                new Quest("The ${Quest.PLAYER1}  is cordially invited to the dinner party of Miss ${Quest.CONSORTSOUND}ingworth, ${Quest.CONSORT} heiress to the ${Quest.PHYSICALMCGUFFIN} fortune. "),
                new Quest("The ${Quest.PLAYER1} is coached on etiquette by  Miss ${Quest.CONSORTSOUND}ingworth's butler. It would not do to embarass the young Miss.  "),
                new Quest("It is finally time for Miss ${Quest.CONSORTSOUND}ingworth's party. Anyone who is anyone is attending, and it is clear that the ${Quest.PLAYER1} is the guest of honor. They successfully charm all of the ${Quest.CONSORT}s with a captivating story of dining customs from their home world. "),
            ], new FraymotifReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);
    }

}