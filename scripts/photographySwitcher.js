function populatePhoto() {
    const inanimateUrls = [
        "graphics/pics/photographyCollection/InanimateShots/AbstractGreen.jpg",
        "graphics/pics/photographyCollection/InanimateShots/AlmostAsSmoothAsIAm.jpg",
        "graphics/pics/photographyCollection/InanimateShots/APillarForManwe.jpg",
        "graphics/pics/photographyCollection/InanimateShots/AUbisoftEAJointEffort.jpg",
        "graphics/pics/photographyCollection/InanimateShots/AwakenTheeYouSufferTooLong.jpg",
        "graphics/pics/photographyCollection/InanimateShots/BetYouCantGuessWhatThisIs.jpg",
        "graphics/pics/photographyCollection/InanimateShots/BlueDotWhatCouldItBe.jpg",
        "graphics/pics/photographyCollection/InanimateShots/BubblesThatShallNeverLeaveYou.jpg",
        "graphics/pics/photographyCollection/InanimateShots/BushesDescend.jpg",
        "graphics/pics/photographyCollection/InanimateShots/CanYourCameraDoBokeh.jpg",
        "graphics/pics/photographyCollection/InanimateShots/CLUCK.jpg",
        "graphics/pics/photographyCollection/InanimateShots/ConfessYourSinsToTheCosmicOwl.jpg",
        "graphics/pics/photographyCollection/InanimateShots/CrissCrossing.jpg",
        "graphics/pics/photographyCollection/InanimateShots/Darklight.jpg",
        "graphics/pics/photographyCollection/InanimateShots/EntranceToTheFaelands.jpg",
        "graphics/pics/photographyCollection/InanimateShots/GoodVibes.jpg",
        "graphics/pics/photographyCollection/InanimateShots/HandsOfTime.jpg",
        "graphics/pics/photographyCollection/InanimateShots/HittingThoseAngles.jpg",
        "graphics/pics/photographyCollection/InanimateShots/HONK.jpg",
        "graphics/pics/photographyCollection/InanimateShots/ImFourteenAndThisIsDeep.jpg",
        "graphics/pics/photographyCollection/InanimateShots/IndustrialAngles.jpg",
        "graphics/pics/photographyCollection/InanimateShots/INoLongerHaveTheOriginalPictureAndNowImMad.jpg",
        "graphics/pics/photographyCollection/InanimateShots/InTheWebOfNight.jpg",
        "graphics/pics/photographyCollection/InanimateShots/MalletBonkers.jpg",
        "graphics/pics/photographyCollection/InanimateShots/ManaHeart.jpg",
        "graphics/pics/photographyCollection/InanimateShots/MetaPhotography.jpg",
        "graphics/pics/photographyCollection/InanimateShots/MyOwnMandatedShot.jpg",
        "graphics/pics/photographyCollection/InanimateShots/NoBrokenBonesHere.jpg",
        "graphics/pics/photographyCollection/InanimateShots/NoisyFlower.jpg",
        "graphics/pics/photographyCollection/InanimateShots/ObligatoryGrassPhoto.jpg",
        "graphics/pics/photographyCollection/InanimateShots/Observe.jpg",
        "graphics/pics/photographyCollection/InanimateShots/OffBrandDuraflame.jpg",
        "graphics/pics/photographyCollection/InanimateShots/OnTheWall.jpg",
        "graphics/pics/photographyCollection/InanimateShots/OurMiteFriendReturns.jpg",
        "graphics/pics/photographyCollection/InanimateShots/PaintedWorld.jpg",
        "graphics/pics/photographyCollection/InanimateShots/PongOfThePingVariety.jpg",
        "graphics/pics/photographyCollection/InanimateShots/ShadesOfRad.jpg",
        "graphics/pics/photographyCollection/InanimateShots/SimpleGeometry.jpg",
        "graphics/pics/photographyCollection/InanimateShots/SomeHorrorMovieOpeningCrawlIGuess.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TakingTheTimeTakingTheTime.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TextureEnhanced.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TheCluckIsVeryCloseWatchOutForTheCluck.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TheFlowerIsInTheShadeHowWillItEat.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TheIndustrialWedge.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TheLeavesAreTooClose.jpg",
        "graphics/pics/photographyCollection/InanimateShots/ThisIsNotMorseCode.jpg",
        "graphics/pics/photographyCollection/InanimateShots/TotallyRealFoliage.jpg",
        "graphics/pics/photographyCollection/InanimateShots/UnderPressure.jpg",
        "graphics/pics/photographyCollection/InanimateShots/WellWeHaventSeenJimSinceThatBigPurpleDudeLeft - Copy.jpg",
        "graphics/pics/photographyCollection/InanimateShots/WormOfGod.jpg",
                          ];

        const animateUrls = [
            "graphics/pics/photographyCollection/livingSubjects/AbsoluteJoy.jpg",
            "graphics/pics/photographyCollection/livingSubjects/BigBrother.jpg",
            "graphics/pics/photographyCollection/livingSubjects/bliss.jpg",
            "graphics/pics/photographyCollection/livingSubjects/ButTheParacitesSayNo.jpg",
            "graphics/pics/photographyCollection/livingSubjects/CanYourCameraDoBokehToo.jpg",
            "graphics/pics/photographyCollection/livingSubjects/CaptureTheBoop.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DemonCat.jpg",
            "graphics/pics/photographyCollection/livingSubjects/Disgust.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DSC_0015.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DSC_0019.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DSC_0024.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DSC_0035.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DSC_0038.jpg",
            "graphics/pics/photographyCollection/livingSubjects/DSC_0040.jpg",
            "graphics/pics/photographyCollection/livingSubjects/EverythingSheDoesIsPhotogenic.jpg",
            "graphics/pics/photographyCollection/livingSubjects/EverythingTheLightTouchesYouMayNotEat.jpg",
            "graphics/pics/photographyCollection/livingSubjects/HeHasFireInTheHeart.jpg",
            "graphics/pics/photographyCollection/livingSubjects/IMustHavePissedHerOff.jpg",
            "graphics/pics/photographyCollection/livingSubjects/InsideYouThereAreTwoGermanShepards.jpg",
            "graphics/pics/photographyCollection/livingSubjects/IsAlwaysWatching.jpg",
            "graphics/pics/photographyCollection/livingSubjects/IsAnAntOverThere.jpg",
            "graphics/pics/photographyCollection/livingSubjects/IsThatSomethingToyShapedOverThere.jpg",
            "graphics/pics/photographyCollection/livingSubjects/IsThatTheSqueakyToyOverThere.jpg",
            "graphics/pics/photographyCollection/livingSubjects/IThinkNOT.jpg",
            "graphics/pics/photographyCollection/livingSubjects/KillerInstincts.jpg",
            "graphics/pics/photographyCollection/livingSubjects/LayingInAFieldOfDinnerAndMomWontLetMeHaveAny.jpg",
            "graphics/pics/photographyCollection/livingSubjects/LikeAVillain.jpg",
            "graphics/pics/photographyCollection/livingSubjects/MakingHerWolfAncestorsProud.jpg",
            "graphics/pics/photographyCollection/livingSubjects/MeAndMyself.jpg",
            "graphics/pics/photographyCollection/livingSubjects/Menacing.jpg",
            "graphics/pics/photographyCollection/livingSubjects/MLEUGH.jpg",
            "graphics/pics/photographyCollection/livingSubjects/OhWowUppies.jpg",
            "graphics/pics/photographyCollection/livingSubjects/PetTheSequel.jpg",
            "graphics/pics/photographyCollection/livingSubjects/SheGrowsAttachedToTheStick.jpg",
            "graphics/pics/photographyCollection/livingSubjects/Slap.jpg",
            "graphics/pics/photographyCollection/livingSubjects/smalls2.jpg",
            "graphics/pics/photographyCollection/livingSubjects/smalls22.jpg",
            "graphics/pics/photographyCollection/livingSubjects/SurelyTheyAreTreats.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TechnicallyPortrait.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TFWItsABitTooWarm.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TheCageShallNotHoldForever.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TheFaceOfAMurderer.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TheOnlyTimeSheHoldsStillIsIfIMakeWeirdNoisesToScareHer.jpg",
            "graphics/pics/photographyCollection/livingSubjects/ThePawOfTruth.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TheStickIsGone.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TheToyStoodNoChance.jpg",
            "graphics/pics/photographyCollection/livingSubjects/ThinkinBoutTreats.jpg",
            "graphics/pics/photographyCollection/livingSubjects/ThisStickIsOneOfHerBestestFriends.jpg",
            "graphics/pics/photographyCollection/livingSubjects/ToMistakeAPingPongBallForASnack.jpg",
            "graphics/pics/photographyCollection/livingSubjects/TruelySmalls.jpg",
            "graphics/pics/photographyCollection/livingSubjects/WaitWhatAreTaxes.jpg"

        ];
    let chosenUrls = [];
    urlIndex = Math.floor(Math.random() * inanimateUrls.length);
    chosenUrls[0] = urlIndex;
    document.getElementById("inanimatePhoto1").src= inanimateUrls[urlIndex];

    while (chosenUrls[0] == urlIndex){
        urlIndex = Math.floor(Math.random() * inanimateUrls.length);
    }
    chosenUrls[1] = urlIndex;
    document.getElementById("inanimatePhoto2").src= inanimateUrls[urlIndex];

    
    while ((chosenUrls[0] == urlIndex) || (chosenUrls[1] == urlIndex)){
        urlIndex = Math.floor(Math.random() * inanimateUrls.length);
    }
    chosenUrls[2] =urlIndex;
    document.getElementById("inanimatePhoto2").src= inanimateUrls[urlIndex];

    
    while ((chosenUrls[0] == urlIndex) || (chosenUrls[1] == urlIndex) || (chosenUrls[2] == urlIndex)){
        urlIndex = Math.floor(Math.random() * inanimateUrls.length);
    }
    chosenUrls[3] =urlIndex;
    document.getElementById("inanimatePhoto3").src= inanimateUrls[urlIndex];

    
    while ((chosenUrls[0] == urlIndex) || (chosenUrls[1] == urlIndex) || (chosenUrls[2] == urlIndex) || (chosenUrls[3] == urlIndex)){
        urlIndex = Math.floor(Math.random() * inanimateUrls.length);
    }
    chosenUrls[4] =urlIndex;
    document.getElementById("inanimatePhoto4").src= inanimateUrls[urlIndex];

//start the Animated Photography section
    chosenUrls = [];
    urlIndex = Math.floor(Math.random() * animateUrls.length);
    chosenUrls[0] = urlIndex;
    document.getElementById("animatePhoto1").src= animateUrls[urlIndex];

    while (chosenUrls[0] == urlIndex){
        urlIndex = Math.floor(Math.random() * animateUrls.length);
    }
    chosenUrls[1] = urlIndex;
    document.getElementById("animatePhoto2").src= animateUrls[urlIndex];

    
    while ((chosenUrls[0] == urlIndex) || (chosenUrls[1] == urlIndex)){
        urlIndex = Math.floor(Math.random() * animateUrls.length);
    }
    chosenUrls[2] =urlIndex;
    document.getElementById("animatePhoto2").src= animateUrls[urlIndex];

    
    while ((chosenUrls[0] == urlIndex) || (chosenUrls[1] == urlIndex) || (chosenUrls[2] == urlIndex)){
        urlIndex = Math.floor(Math.random() * animateUrls.length);
    }
    chosenUrls[3] =urlIndex;
    document.getElementById("animatePhoto3").src= animateUrls[urlIndex];

    
    while ((chosenUrls[0] == urlIndex) || (chosenUrls[1] == urlIndex) || (chosenUrls[2] == urlIndex) || (chosenUrls[3] == urlIndex)){
        urlIndex = Math.floor(Math.random() * animateUrls.length);
    }
    chosenUrls[4] =urlIndex;
    document.getElementById("animatePhoto4").src= animateUrls[urlIndex];

}