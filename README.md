# GitHubAccess

A social graph visualisation of a repository using the GitHub API and c3.js library.
I used the api to interrogate the repository for information on users, commit times and date, and the remaining branches (this part involved manipulation of the javascript api library used). The json data was converted into usable format and constructed into the graphs shown below. I used a javascript sever to locally host the project. Screenshots of this have been included below, with a brief desciption of the analysis.


My project focuses on a repo of a group project that I completed as part of an E-Business module.
It was a successful project and so I aimed to assess the accuracy of our process estimation, and the
work patterns of group members to better understand how we achieved our end result. 

Section 1
The first thing I aimed to measure was our progress relative to the Gantt chart the we prepared as part of our interim report.

To do this I created a line graph of the commits during the time period and compared this to the flow of work we had planned in our
Gantt chart.

![alt text](https://raw.githubusercontent.com/AoifeKettle/GitHubAccess/master/Capture1.JPG)

![alt text](https://raw.githubusercontent.com/AoifeKettle/GitHubAccess/master/gantt.JPG)

The graph comparisons show that overall, we did a good job of keeping to our estimations. There is a peak of commits towards the end 
of our project that can be attributed to small changes and bug fixes that we were making.

Section 2

I was also curious to view the times that we had been committing to the repo, whether we had been working late to meet deadlines, or
during group meetings.
![alt text](https://raw.githubusercontent.com/AoifeKettle/GitHubAccess/master/capture2.JPG)


Section 3

People work in different ways and some of the engineering process required us to work separately to meet individual deadlines.
When doing this we worked according to our own habits and schedules. The bar chart below shows the average time that each member made
commits, it shows that Marta likes to work throughout the college day, while Sinead favoured the mornings and Joe late nights.

![alt text](https://raw.githubusercontent.com/AoifeKettle/GitHubAccess/master/Capture3.JPG)

Section 4

Despite the success of this project, we did have a rough start and had to change our approach part way through the process, this led to
some of our work going to waste. The graph below measures the number of files committed that were not used in the final project, they
are contained in branches that were never merged back into the master.

Using the api I found 3 branches of work that were not merged back into the database. These were, the webiste website branch and two versions of a database branch. These show a large amount of wasted code that is unfortunate, however the steps to  develop these did add
to our learning.
