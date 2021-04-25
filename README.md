# flashy
A flashcard app

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**flashy** is a mobile-first flashcard app. It is built with React in the frontend and Rails in the backend. After signing up, users can create and modify their own flashcards, which are organized into decks. **flashy** can be used for increasing vocabulary or remembering terms and concepts in a specific subject.


<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

Backend
- Build a Ruby on Rails server with RESTful JSON endpoints
- Build a database with three tables: users, decks, words
* user to decks is one to many, decks to words is many to many
* full CRUD controller methods for the words and decks tables

Frontend
- React app with at least 8 separate rendered components
- Consume data from Ruby on Rails backend and render data in React components
- Enable full CRUD on the frontend for decks and words within those decks
- Use CSS Flexbox and/or Grid
- Implement media queries for mobile and desktop

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| React Router DOM | Enables linking and routing to different components |
|      Axios       | Sends asynchronous HTTP requests to RESTful endpoints to perform CRUD on database |
|    PostgreSQl    | Imported as 'pg' in Rails, sets postgresql as the database for Active Record |
|    rack-cors     | Handles cross-origin resource sharing, makes cross-origin AJAX possible |

<br>

### Client (Front End)

#### Wireframes

[Mobile Prototype](https://xd.adobe.com/view/6295745f-886e-42e0-8273-81997bc2a666-37c6/)

#### Mobile
<img src="https://i.imgur.com/GhFK64i.png" alt="signup" width="200"/> <img src="https://i.imgur.com/QbYl7kD.png" alt="signin" width="200"/>

User home will display decks. Deck detail screens are the launching point for full CRUD on decks and entries.

</br>
<img src="https://i.imgur.com/Z469cH9.png" alt="home" width="200"/>          <img src="https://i.imgur.com/gcXgDob.png" alt="deck" width="200"/>
 
Some screens showing how post, update, and delete will work.

</br>
<img src="https://i.imgur.com/ipIPjen.png" alt="edit entry" width="200"/>     <img src="https://i.imgur.com/rx9OUUe.png" alt="create deck" width="200"/>     <img src="https://i.imgur.com/oM3kwqI.png" alt="create entry" width="200"/>
 
Users will be able to review the term and details for each entry in the deck and navigate to different screens via the hamburger.
</br>
<img src="https://i.imgur.com/UdeZfci.png" alt="word front" width="200"/>     <img src="https://i.imgur.com/Jhq4mre.png" alt="word back" width="200"/>     <img src="https://i.imgur.com/QRNEkPt.png" alt="hamburger" width="200"/>
 
In an earlier plan, editing the deck and its entries occurred in one screen. Not sure how this could be implemented, I decided against it. However, I still want to include this idea in case it is possible as a post-MVP.
</br>
<img src="https://i.imgur.com/YsLL1LD.png" alt="deck" width="200"/>     <img src="https://i.imgur.com/dJRpfyy.png?1" alt="manage" width="200"/>     <img src="https://i.imgur.com/KoTgcL0.png?1" alt="create" width="200"/>     <img src="https://i.imgur.com/sPjGA60.png?1" alt="create/manage bottom" width="200">

#### Desktop
<img src="https://i.imgur.com/IuSUQTv.png" alt="signup" width="400"/> <img src="https://i.imgur.com/VjdeYCQ.png" alt="signin" width="400"/> 

The same home and deck view on desktop:
</br>
<img src="https://i.imgur.com/RkESP1L.png" alt="home" width="400"/>     <img src="https://i.imgur.com/SXxHhYS.png" alt="deck" width="400"/>

Desktop CRUD:
</br>
<img src="https://i.imgur.com/4dUuom0.png" alt="edit entry" width="400"/>     <img src="https://i.imgur.com/oXKhypH.png" alt="create deck" width="400"/>     <img src="https://i.imgur.com/hcV8vp1.png" alt="create entry" width="400"/>

Reviewing entries:
</br>
<img src="https://i.imgur.com/0kqZDYZ.png" alt="word front" width="400"/>     <img src="https://i.imgur.com/RXinrxZ.png" alt="word back" width="400"/> 

Desktop version of my "earlier plan" that I hope might be possible at some point:
</br>
<img src="https://i.imgur.com/pUDbRmW.png" alt="deck" width="400"/>     <img src="https://i.imgur.com/GFA2uYB.png" alt="manage" width="400"/>     <img src="https://i.imgur.com/Oort2w2.png" alt="create" width="400"/>

#### Component Tree

![Flashy Component Tree](https://i.imgur.com/tbhj69e.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![Flashy ERD](https://i.imgur.com/IeGFjGE.jpg)
<br>

***

## Post-MVP

- Enable users to make decks public and search/share/save other users' decks
- Create a index card "flip effect" when switching from term to detail in the word view
- Include a textbox for pasting articles that will scan and produce a list of article words that are in the Academic Word List (AWL) and create a deck from these words

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
