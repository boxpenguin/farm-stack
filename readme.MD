# WTF happened here?
I learned some new skills with javascript and react.

> FARM Stack: FastAPI, React, MongoDB

    FastAPI
    : Python based API generator that helped me build the pat-fastapi program

    React
    : Hell spawn the is so goddamn confusing as a non web developer that I will likely need to spend a bunch of time to really get my head around it all.

    MongoDB
    : Propritary NOSql database

## Details
Video and content by Bek Brace and FreeCodeCamp.org

[Github](https://github.com/BekBrace/FARM-Stack-Course)

[Youtube](https://www.youtube.com/watch?v=OzUzrs8uJl8)

---

## FARM Project - Todo App
### Notes
WTF is javascript

Seriously what am I typing here?!

Bootstrap is really neato

MongoDB requires a lot of sus licenses, but hey the DBaaS is pretty neat idea.

VITE VS CRA???

### How to run
Start backend server using `uvicorn main:app --reload` (might be good idea to use `tmux` I lost the process somehow)

Start frontend server using `npm start` (not required but start it in `tmux` as well, I didnt lose it but...)

---

## Take aways
### FastAPI
FastAPI is still very fun to use to make an API but still very barebones compared to Django. There is so much to unpack with the Pydantic module that I could easily make it work my time to learn instead of Django. But in all honesty Django is better for whole websites especially those that will be given to non-technical staff. 


For example Django's "batteries included" methodology includes an whole administration panel and authenitcation that isnt that ugly even.

FastAPI is good at being very fast and simple when I know its not going to be updated by others.

> Use FastAPI for small projects and Django for larger ones that require a lot of love

### React
I hate javascript syntax and some basic things like classes still haven't quite clicked yet. There are some symbols like
``` javascript
{
    =>
}
```
That just dont make sense to me and this video did not really help a completely newbie person like me. The powers that make JS so great still ellude me and it just looks like a cryptid typed it out. 

> Take the time to learn React/Vue to better round out my programming skills, you can do a lot of good by learning this for just home projects. pat-fastapi-frontend???

### CSS/HTML
I did get to learn some HTML and CSS with the bootstrap class. Its pretty neat method to get a decent looking website without a lot of work and its open source and supported within Node.

> Might make Stephanie jelous lol, I could teach her some smaller bits.

### NodeJS
Used a little bit in this project and already saw the battle of "Create-React-App" vs "Vite" for just bootstrapping a new project. Both seemed fine for this project but its possible to use the vite as well to roundout the skill-set.

> Still dont know how that shit works lol, added some videos my watchlist

### MONGODB
Tolvard once said to not beat a developer seeking compensation for their work. MongoDB is just one of those people. They want money for enterprise features that are found elsewhere. Honestly as a DBaaS its pretty impressive that they offer it as a free tier. I know that is to grab hopefulls into their ecosystem. 

Using Apache Cassandra instead could provide the right amount of opensource that heals my soul. Also its kinda weird that they picked functions like `mongod` to run their program. It is also noted that I had to add the repos manually and found that Debian and RHEL blocked them from the official repos for their bad license pick. 

> Dump this and learn Cassandra along with Redis. MongoDB gave me the creeps and major anaconda feels as well. Vibes were off.
