$(document).ready(function(){
	var quoteSource=[

{quote: "People's knowledge, in which the body has much more place than in our way of thinking and knowing.", name:" Paolo Friere"},
{quote: "Without practice there is no knowledge.", name:"Paolo Freire"},
{quote: "There can be no such thing as neutrality. It's a code word for the existing system.", name:"Myles Horton"},
{quote: "It's the structures of society that we've got to change. We don't change men's hearts.", name:"Myles Horton"},
{quote: "You have the responsibility to put whatever you're teaching in a social context.", name:"Myles Horton"},
{quote: "You can't have an individual right. It has to be a universal right. I have no rights that everybody else doesn't have.", name:"Myles Horton"},
{quote: "If we think that there is no education without students, then there is no education situation without certain objects to be known, to be taught, to be learned. I prefer to say to be known and reknown.", name:"Paolo Freire"},
{quote: "These two risks exist: the risk of putting in parenthesis the content and to emphasize exclusively the political problem and the risk of putting parenthesis the political dimension of the content and to teach just the content. For me both attitudes are wrong. And it is a question that comes up because of the nature of the process of education or the process of politics.", name:"Paolo Freire"},
{quote: "I decided I wanted to be an educator not an organizer or a speaker.", name:"Myles Horton"},
{quote: "I had no desire to play any other kind of role, except a background educational role. It was very fulfilling and very satisfactory.", name:"Myles Horton"},
{quote: "We were dealing with the radicals, but we were dealing also with the people that they couldn't reach. They had to reach the people through us quite often. Their speeches didn't get to them. And when they did, the people didn't know what to do with the speeches.", name:"Myles Horton"},
{quote: "They assumed that we were an organizer's training school. But I kept saying no, no. We do education and they become organized.", name:"Myles Horton"},
{quote: "We emphasize ways you analyze and perform and relate to people, but that's what I call education, not organizing.", name:"Myles Horton"},
{quote: "Education is before, is during, and is after. It's a process, a permanent process. It has to do with human existence and curiosity.", name:"Paolo Freire"},
{quote: "If the purpose is to solve the problem, there are a lot of ways to solve the problem that are so much simpler than going through all this educational process. Solving the problem can't be the goal of education.", name:"Myles Horton"},
{quote: "Organizers are committed to achieving a limited, specific goal whether or not it leads to structural change, or reinforces the system, or plays in the hands of capitalists.", name:"Myles Horton"},
{quote: "If you are not trying to be efficient in organizing workshops, the people will not answer you next year when you call. That is, efficiency, without being an instrument of enslaving you, is something that is absolutely necessary.", name:"Paolo Freire"},
{quote: "I think certainly you can learning from mobilizing, but you can learn to manipulate the people or you can learn to educate the people.", name:"Myles Horton"},
{quote: "Organizers who hope to educate must increase their historical and cultural sensitivity.", name:"Paolo Freire"},
{quote: "We had been successful at Highlander earlier in organizing a county in which we lived, organizing the unions, and organizing the county politically. We took over the county politically by using education.", name:"Myles Horton"},
{quote: "Within that framework I was interested in going as far as I could in helping people develop the capacity to make decisions and to take responsibility, which is what I think is the role of educator.", name:"Myles Horton"},
{quote: "The best way you had to intervene was to reject giving the solution and secondly to be honest.", name:"Paolo Freire"},
{quote: "An organizer's job is not to educate people as a prime consideration. His job is to accomplish a limited, specific goal.", Name:"Myles Horton"},
{quote: "I didn't want the expert to tell them what to do. I wanted the expert to tell them the facts and let them decide what to do.", name:"Myles Horton"},
{quote: "I've never yet found any experts that know where the line is. If people who want to be experts want to tell people what to do because they think it's their duty to tell them what to do, to me that takes away the power of people to make decisions.", name:"Myles Horton"},
{quote: "How is it possible for us to work in a community without feeling the spirit of the culture that has been there for many years, without trying to understand the soul of the culture? We cannot interfere in this culture. Without understanding the soul of the culture we just invade the culture.", name:"Paolo Freire"},
{quote: "It is cultural and historical, and if it is cultural and historical, it can be changed. And if it can be changed, it's not unethical to put the possibility of change on the table.", name:"Paolo Freire"},
{quote: "I have no respect for people who claim to be neutral making criticisms of us--none. They have the power base to magnify all of their positions, and then they label it neutral;.", name:"Myles Horton"},
{quote: "Every culture has negativeness and positiveness, and what we have to do is to improve the positive and to overcome the negativeness.", name:"Myles Horton"},
{quote: "I used to say there are only two things that people who came to Highlander had to accept as a condition of coming, and that is no discrimination, period, and complete freedom of speech.", name:"Myles Horton"},
{quote: "I'm not saying everything in a people's culture is bad. I'm just saying that you have to pick and choose and keep the good things. Now I have very little respect for the electoral system in the United States.", name:"Myles Horton"},
{quote: "We've stretched it to try to make it work for different kind of problems and in stretching and adapting, we lost its meaning. We still have the form but not the meaning.", name:"Myles Horton"},
{quote: "The educator does not have the right to be silent just because he or she has to respect the culture. If he or she does not have the right to impose his or her voice on the people, he does not have the right to be silent. It has to do precisely with the duty of intervening, which the educator has to assume without becoming afraid. There is no reason for an educator to be ashamed of this.", name:"Paolo Freire"},
{quote: "Every time it was possible for children, without risking their lives, to learn by doing, I preferred that they do this.", name:"Paolo Freire"},
{quote: "Without the limits, it's impossible for freedom to become freedom and also it's impossible for authority to accomplish its duty, which is precisely to structure limits.", name:"Paolo Freire"},
{quote: "If you use that idea of limits, you've got to also think of how people accept limits that don't even exist--like in the university... Most of them could get by, could do much more than they realize they can do... Most people will find out they can go much further in an institution that is big and bureaucratic and depends primarily on reports and grades.", name:"Myles Horton"},
{quote: "Once people find they can survive outside the limits, they're much happier.", name:"Myles Horton"}

];


	$('#quoteButton').click(function(evt){
		//define the containers of the info we target
		var quote = $('#quoteContainer p').text();
		var quoteGenius = $('#quoteGenius').text();
		//prevent browser's default action
		evt.preventDefault();
		//getting a new random number to attach to a quote and setting a limit
		var sourceLength = quoteSource.length;
		var randomNumber= Math.floor(Math.random()*sourceLength);
		//set a new quote
		for(i=0;i<=sourceLength;i+=1){
		var newQuoteText = quoteSource[randomNumber].quote;
		var newQuoteGenius = quoteSource[randomNumber].name;
		//console.log(newQuoteText,newQuoteGenius);
		var timeAnimation = 500;
		var quoteContainer = $('#quoteContainer');
		//fade out animation with callback
		quoteContainer.fadeOut(timeAnimation, function(){
			quoteContainer.html('');
			quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');

			//fadein animation.
			quoteContainer.fadeIn(timeAnimation);
		});

		break;
	};//end for loop

});//end quoteButton function


});//end document ready
