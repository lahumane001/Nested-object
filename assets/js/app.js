var cl = console.log
var dw = document.write


var person = {
    fname :"Jhon",
    lname : "Doe",
    age : 53,
    nativeplace : "pune",
    child : {
        fname: "July",
        lname: "Doe",
        age: 25,
        nativeplace: "pune",
        grandchild : {
            fname: "May",
            lname: "Bold",
            age: 2,
            nativeplace: "Mumbai"
        }
    }
};

//Hello There I'm Jhon Doe, 53 years old, from Pune.
//I have one daughter, whose name is July Doe, she is 25 years
//old and from pune. she is having a baby girl whose name is 
//May Bond, she is 2 years old and from Mumbai.

var info = "<p class='alert alert-success'>Hello There I'm " + person.fname + " " + person.lname + ", "
            + person.age + " years old,from " + person.nativeplace
            + ". I have one daughter, whose name is " + person.child.fname
            + " " + person.child.lname + ", she is " + person.child.age 
            + " years old and from " + person.child.nativeplace + ". she is having a baby girl whose name is "
            + person.child.grandchild.fname + " " + person.child.grandchild.lname 
            + ", she is " + person.child.grandchild.age + " years old and from "
            + person.child.grandchild.nativeplace + "</p>"


            console.log(info);
            document.write(info);
            document.write("<hr>");


//Virat Kohli born 5 November 1988 is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman.Kohli made his Test debut in 2011. He reached the number one spot in the ICC rankings for ODI batsmen for the first time in 2013.he was awarded the Arjuna Award in 2013.
//Anushka Sharma is an Indian actress and producer who works in Hindi films.
//born 1 May 1988, 34 years old and from Delhi.she has a daughter. whose name is Vamika Kohli,
//she is 1 year old and from Delhi.
            
        var person = {
            cfname : "Virat",
            clname : "Kohli",
            birthdate : "5 November 1988",
            teamName : "India national cricket team",
            nativeplace : "Delhi",
            iplTeamName : "Royal Challengers Bangalore",
            profile : "right-handed batsman",
            debut : 2011,
            rank : "one",
            odiFirstTime : 2013,
            awarded : "Arjuna Award",
            spouse : {
                fname : "Anushka",
                lname : "Sharma",
                profile : "Indian actress",
                birthdate : "1 May 1988",
                age : 34,
                nativeplace : "Delhi",
                child : {
                    fname : "Vamika",
                    lname : "Kohli",
                    age : 1,
                    nativeplace : "Delhi",
                }
            }
           };

    
       var info = "<p class='alert alert-success'>" + person.cfname + " " + person.clname + " born " + person.birthdate 
                +" is an Indian international cricketer and former captain of the " 
                +person.teamName + ". He plays for " + person.nativeplace + " in domestic cricket and " 
                + person.iplTeamName + " in the Indian Premier League as a " 
                + person.profile + ".Kohli made his Test debut in " + person.debut + ". He reached the number " 
                + person.rank + " spot in the ICC rankings for ODI batsmen for the first time in " 
                + person.odiFirstTime + ".he was awarded the " + person.awarded + " in 2013." 
                + person.spouse.fname + " " + person.spouse.lname + " is an " + person.spouse.profile
                + " who works in Hindi films. born " + person.spouse.birthdate + ", " + person.spouse.age
                + " years old and from " + person.spouse.nativeplace + ".she has a daughter. whose name is"
                + person.spouse.child.fname + " " + person.spouse.child.lname + ", she is " + person.spouse.child.age
                + " year old and from " + person.spouse.child.nativeplace + ".</p>"

                console.log(info);
                document.write(info);
                document.write("<hr>");



//Akshay Kumar is an Indian-born naturalised Canadian actor and film producer who works in Hindi cinema. In over 30 years of acting, Kumar has appeared in over 100 films and has won several awards, including two National Film Awards and two Filmfare Awards.born 9 September 1967 ,55 year old.He lives in Mumbai.
//Twinkle Khanna is an Indian author,film producer and a former film actress.born on 29 December, age 47 years old and from Mumbai.
//she has a daughter. whose name is Nitara Kumar. she is 10 year old and from Mumbai.


        var person = {
            fname : "Akshay",
            lname : "Kumar",
            profile : "actor",
            work : "Hindi cinema",
            experience : 30,
            appearedFilm : 100,
            Award : "National Film Awards",
            birthdate : "9 september 1967",
            age : 55,
            nativeplace : "Mumbai",
            spouse : {
                fname : "Twinkle",
                lname : "Khanna",
                profile : "Indian author",
                birthdate : "29 december",
                age : 47,
                nativeplace : "Mumbai",
                child : {
                    fname : "Nitara",
                    lname : "Kumar",
                    age : 10,
                    nativeplace : "Mumbai",
                }
            }
        }

       var intro ="<p class='alert alert-success'>" + person.fname + " " + person.lname + " is an Indian-born naturalised Canadian "
                     + person.profile 
                  + " and film producer who works in " + person.work + ". In over " + person.experience 
                  + " years of acting, Kumar has appeared in over " + person.appearedFilm
                   + " films and has won several awards, including two " + person.Award + " and two Filmfare Awards.born " 
                   + person.birthdate + " ," + person.age + " year old.He lives in "+ person.nativeplace + "." 
                   + person.spouse.fname + " " + person.spouse.lname + " is an " + person.spouse.profile 
                   + ",film producer and a former film actress.born on " + person.spouse.birthdate + ", age " + person.spouse.age
                   + " years old and from " + person.spouse.nativeplace + ".she has a daughter. whose name is "
                   + person.spouse.child.fname + " " + person.spouse.child.lname + ". she is " + person.spouse.child.age
                   + " year old and from " + person.spouse.child.nativeplace + "</p>"


                   console.log(intro);
                 document.write(intro);
                  document.write("<hr>");

 // Amitabh Bachchan is an Indian actor, film producer, television host, occasional playback singer and former politician known for his work in Hindi cinema. He is regarded as one of the most successful and influential actors in the history of Indian cinema Born: 11 October 1942 ,age 80 years Spouse: Jaya Bachchan, Height: 1.88 m
 //Abhishek Bachchan is an Indian actor and film producer known for his work in Hindi films. Part of the Bachchan family, he is the son of actors Amitabh Bachchan and Jaya Bachchan and the grandson of poet Harivansh Rai Bachchan and social activist Teji Bachchan Children: Aaradhya Bachchan , Born: 16 November 2011 age 10 years

               var person ={
                    fname : "Amitabh",
                    lname : "Bachchan",
                    profession : " Indian actor,",
                    work : " Hindi cinema.",
                    Born : "11 October 1942",
                    age : "80 ",
                    spouse : "Jaya Bachchan",
                    Height : " 1.88 m",
                    child : {
                        fname : "Abhishek",
                        lname : " Bachchan",
                        profession : "actor",
                        work : "Hindi films",
                        son : " Amitabh Bachchan",
                        grandson : "poet Harivansh Rai Bachchan",
                        grandchild : {
                            fname : "Aaradhya",
                            lname : " Bachchan",
                            age : 10,
                            born : "16 November 2011",
                        }
                    }
                }
  
    var info = "<p class= 'alert alert-success'>" +person.fname + " " + person.lname +  " is an" 
                + person.profession + " film producer, television host, occasional playback singer and former known for his work in" + person.work + " He is regarded as one of the most successful and influential actors  in the history of Indian cinema Born: " + person.Born + " , age " +person.age  + " years " + " Spouse: " + person.spouse
                 + " , Height" + person.Height + "  " + person.child.fname + " " + person.child.lname 
                 + " is an Indian actor " + person.child.profession + " and film producer known for his work in " 
                 + person.child.work + "  Part of the Bachchan family, he is the son of actors "
                + person.child.son + " and Jaya Bachchan and the grandson of poet " + person.child.grandson
                 + " and social activist Teji Bachchan Children: " + person.child.grandchild.fname + " " 
                 + person.child.grandchild.lname + " , Born" + person.child.grandchild.born + "  age " 
                 + person.child.grandchild.age +" years </p> "

                 
                document.write(info)


//Harshad Shantilal Mehta was an Indian stockbroker. Mehta's involvement in the 1992 Indian securities scam made him infamous as a market manipulator. Of the 27 criminal charges brought against Mehta, he was only convicted of four, before his death at age 47 in 2001. Wikipedia
 // Born: 29 July 1954, Paneli Moti
 // wife: Jyoti Mehta age is 60 year 
// Children: Aatur Harshad Mehta , he is college student , age is 25 year

                  var person = {
                    fname: "Harshad",
                    mname: "Shantilal",
                    lname: "Mehta",
                    profession: "stockbroker",
                    scamedate: "1992",
                    charg: "27 criminal charges",
                    age: "47",
                    dyear: "2001",
                    born: " 29 July 1954, ",
                    wife: {
                        fname: "Jyoti",
                        mname: " harshad",
                        lname: "Mehta",
                        age: "55",
                        child: {
                            fname: "Aatur",
                            mname: " harshad",
                            lname: "Mehta",
                            age: "25",
                        }
                    }
                }

                
                var info =" <p class='alert alert-success'>" +person.fname + " " + person.mname + " " + person.lname + " was an Indian " + person.profession + ".Mehta's involvement in the " + person.scamedate + " Indian securities scam made him infamous as a market manipulator. Of the " + person.charg + " brought against Mehta, he was only convicted of four,before his death at age " + person.age +
                    " in " + person.dyear + " Born:" + person.born + "  Paneli Moti wife: " + person.wife.fname + " " + person.wife.mname
                    + "  " + person.wife.lname + " age is " + person.wife.age + "  year " + " Children: " + person.wife.child.fname
                    + " " + person.wife.child.mname + " " + person.wife.child.lname + " , he is college student , age is " 
                    + person.wife.child.age + " year " + "</p>"
                
                document.write(info)


 //Gautam Shantilal Adani is an Indian billionaire businessman. He is the chairman and founder of Adani Group, an Ahmedabad-based multinational conglomerate involved in port development and operations in India. Adani is also the president of Adani Foundation, which is primarily led by his wife, Priti Adani.born 24 June 1962 ,60 year old.
//Priti Adani with $1 billion net worth is an Indian businessperson and chairwoman of Adani Foundation. born 1965, 57 years old and from Ahmedabad. she have a children whose name is Karan Adani , he is 35 year old and from Ahmedabad
   
var person = {
    fname : "Gautam",
    mname : "Shantilal",
    lname : "Adani",
    profile : "billionaire",
    owner : "Adani Group",
    nativeplace : "Ahmedabad",
    country : "India",
    president : "Adani Foundation",
    wife : "Priti Adani",
    birthdate : "24 June 1962",
    age : 60,
    spouse : {
        fname : "Priti",
        lnmae : "Adani",
        owner : "Adani Foundation",
        birthyear : 1965,
        age : 57,
        nativeplace : "Ahmedabad",
        child : {
            fname : "Karan",
            lname : "Adani",
            age : 35,
            nativeplace : "Ahmedabad",
        }
    }
   };  
   
   var intro ="<p class='alert alert-success'>" + person.fname + " " + person.mname + " " + person.lname + " is an Indian " 
   + person.profile 
   + " businessman. He is the chairman and founder of " + person.owner + ", an " + person.nativeplace
   + "-based multinational conglomerate involved in port development and operations in " + person.country 
   + ". Adani is also the president of " + person.president + ", which is primarily led by his wife, "
   + person.wife + ".born " + person.birthdate + " ," + person.age + " year old." + person.spouse.fname 
   + " " + person.spouse.lname + " with $1 billion net worth is an Indian businessperson and chairwoman of " 
   + person.spouse.owner + ". born " + person.spouse.birthyear + "," + person.spouse.age +
   + " years old and from " + person.spouse.nativeplace + ". she have a children whose name is " + person.spouse.child.fname
   + " " + person.spouse.child.lname + ", he is " + person.spouse.child.age + " year old and from " 
   + person.spouse.child.nativeplace + ".</p>" 

console.log(intro);
document.write(intro);
document.write("<hr>");

//Sharad Govindrao Pawar is an Indian politician. He has served as the Chief Minister of Maharashtra on four occasions. He has held the posts of Minister of Defence and Minister of Agriculture in the Government of India.  party: Nationalist Congress Party Children: Supriya Sule is politician she have  daughter , whose name is  Revati Sule, age of ravti is 24 year

var person = {
    fname: "Sharad",
    lname: "Pawar",
    profession: "politician.",
    cm: "Maharashtra",
    pMinister: "Defence",
    Minister: "Agriculture",
    party: "Nationalist Congress Party",
    Children: {
        fname: "Supriya",
        lname: "Pawar",
        profession: "politician.",
        grandchild: {
            fname: "revati",
            lname: "Pawar",
            age: "24",
        }
    }
};


var info = " <p class='alert alert-success'>" + person.fname + " Govindrao " + person.lname + " is an Indian " + person.profession
    + " He has served as the Chief Minister of " + person.cm + "  on four . He has held the posts of Minister of " +
    person.pMinister + "  and Minister of " + person.Minister + "  in the Government of India. party : " + person.party
    + "  Children: " + person.Children.fname + " " + person.Children.lname + "  is " + person.Children.profession
    + "  she have  daughter ,   whose name is  " + person.Children.grandchild.fname + "  " + person.Children.grandchild.lname + " , age of ravti is " + person.Children.grandchild.age + "  year" + "</p>"

    document.write(info)
    document.write("<hr>");

   // sachin Tendulkar ; Born,  1973 Bombay (now Mumbai), Maharashtra ; Age, 49 Years,
    // Awards: Bharat Ratna, Wisden Cricketers of the Year, MORE
    // wife: Anjali Tendulkar she is from mumbai, age is 54 year
    // Height: 1.65 m
    // Children: Sara Tendulkar, from mombay age of sara is 25 years
    // Batting style: Right-handed
    // Number of centuries: 51

    var person = {
        fname: "sachin",
        lname: "Tendulkar",
        born: "1973",
        nativePlace: "bombay",
        age: "49",
        awards: "Bharat Ratna, Wisden Cricketers of the Year",
        nativeplace: "pune",
        style: " Right-handed",
        Height: "1.6 m",
        centuries: "51",
        wife: {
            fname: "Anjali",
            lname: "Tendulkar",
            nativePlace: "bombay",
            age: "54",
            child: {
                fname: "sara",
                lname: "Tendulkar",
                nativePlace: "bombay",
                age: "25",
    
            }
        }
    }
 
    var info = " <p class=' alert alert-success'>" + person.fname + " " + person.lname + " ; Born, " + person.born + " " +
        person.nativePlace + " (now Mumbai), Maharashtra ; " + "  Age, " + person.age +
        "  Years,Awards: " + person.awards + " MORE  wife: " + person.wife.fname + " "
        + person.wife.lname + " she is from " + person.wife.nativePlace + " , age is "
        + person.wife.age + " years "
        + "  Children : " + person.wife.child.fname + " " + person.wife.child.lname + " , "
        + " from  " + person.wife.child.nativePlace + " age of sara is " + person.wife.child.age + " years Batting style:"
        + person.style + " Number of centuries: " + person.centuries + "</p>"
    
    document.write(info)

 //Bal Thackeray was an Indian politician who founded the Shiv Sena, a right-wing pro-Marathi and Hindu nationalist party active mainly in the state of Maharashtra.He had a large political influence in the state, especially in Mumbai.born 23 January 1926,95 year old.
 //Uddhav Thackeray is an Indian politician who served as the 19th Chief Minister of Maharashtra from 2019 to 2022, 62 years old and from Mumbai.Aaditya Thackeray is an Indian Politician who served as a Cabinet Minister of Higher Education, Cabinet Minister of Tourism and Environment for the Government of Maharashtra. He is also an MLA of Maharashtra Legislative Assembly from Mumbai, 32 years old.

var person = {
    fname : "Bal",
    lname : "Thakeray",
    union : "Shiv Sena",
    state : "Maharashtra",
    nativeplace : "Mumbai",
    birthdate : "23 january 1926",
    age : 95,
    child : {
       fname : "Uddhav",
       lname : "Thakeray",
       profile : "Indian politician",
       cm : "2019 to 2022",
       age : 62,
       nativeplace : "Mumbai",
       grandchild : {
        fname : "Aaditya",
        lname : "Thackeray",
        profile : "Indian politician",
        state : "Maharashtra",
        nativeplace : "Mumbai",
        age : 32,
       }
    }
};

var intro ="<p class=' alert alert-success'>" +  person.fname + " " + person.lname + " was an Indian politician who founded the "+ person.union +", a right-wing pro-Marathi and Hindu nationalist party active mainly in the state of " 
             + person.state + ".He had a large political influence in the state, especially in " 
             + person.nativeplace + " .born " + person.birthdate + "," + person.age + "year old."
             + person.child.fname + " " +  person.child.lname + " is an " + person.child.profile 
             + " who served as the 19th Chief Minister of Maharashtra from " + person.child.cm
             + "," + person.child.age + " years old and from " + person.child.nativeplace + "."
             + person.child.grandchild.fname + " " + person.child.grandchild.lname + " is an "
             + person.child.grandchild.profile + " who served as a Cabinet Minister of Higher Education, Cabinet Minister of Tourism and Environment for the Government of" + person.child.grandchild.state 
             + ". He is also an MLA of Maharashtra Legislative Assembly from " + person.child.grandchild.nativeplace
             + ", " + person.child.grandchild.age + " years old.</p>"

 console.log(intro);
 document.write(intro);
 document.write("<hr>");

 //Elon Reeve Musk FRS is a business  invesmagnate andtor. He is the founder, CEO, and chief engineer of SpaceX; angel investor, CEO and product architect of Tesla, Inc.; founder of the Boring Company; co-founder of Neuralink and OpenAI; president of the Musk Foundation; and owner and CEO of Twitter, Inc. Wikipedia
// Born: 28 June 1971 (age 51 years), Pretoria, South Africa
// Net worth: 20,830 crores USD (2022) Forbes
// Education: University of Pennsylvania (1992–1997), MORE
// Parents: Errol Musk is 70 year old, Nationality: American, Canadian, profession: pilot,property developer,
// children:  Vivian Jenna Wilson age is 25 year , native place is america

 var person = {
    fname: "Elon",
    mname: "Reeve",
    lname: "Musk",
    ceo: "chief engineer of SpaceX;",
    founder: " Boring Company",
    cofounder: "Neuralink and OpenAI",
    president: "Musk Foundation ",
    Born: "  28 June 1971 (age 51 years),",
    Networth: "20,830 crores USD (2022) Forbes",
    Education: "University of Pennsylvania (1992 to1997), MORe",
    Parentsd: {
        fname: " Errol",
        lname: "Musk  ",
        nativePlace: " American, Canadian",
        age: " 70",
        profession: " pilot,property developer,",
        child: {
            fname: "Vivian",
            mname: "Jenna",
            lname: "Wilson ",
            age: "25",
            nativePlace: "america"
        }
    }
};
var info = " <p class= 'alert alert-success'>" + person.fname + " " + person.mname + " " + person.lname 
           + "  FRS is a business  invesmagnate andtor." + "  He is the founder, CEO,  and " + person.ceo 
           + " angel investor, CEO and product architect of Tesla  Inc.; founder of the " + person.founder 
           + " co-founder of " + person.cofounder + "  president of the " + person.president
           + "  and owner and CEO of Twitter Born:  " + person.Born + " Education: " + person.Education 
           + " Parents:" + person.Parentsd.fname + " " + person.Parentsd.lname + " is age " + person.Parentsd.age 
           + " year old, Nationality:" + person.Parentsd.nativePlace + " profession: " + person.Parentsd.profession 
          + "  children: " + person.Parentsd.child.fname + "  " + person.Parentsd.child.mname + " " 
          + person.Parentsd.child.lname + "  age is " + person.Parentsd.child.age + "  year , native place is "
          + person.Parentsd.child.nativePlace + "</p>"


document.write(info)