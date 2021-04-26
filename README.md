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

**flashy** is a mobile-first flashcard app. After signing up, users can create and modify their own flashcards, which are organized into decks. **flashy** can be used for increasing vocabulary or remembering terms and concepts in a specific subject.


<br>

## MVP

The **flashy** MVP is a well-organized "React on Rails" RESTful web app. Backend endpoints and frontend API calls will follow standard naming conventions. **flashy** will include a container component to reduce the number of API calls. The user interface will facilitate full CRUD on the deck and entry tables and present a uniform, responsive style.

<br>

### Goals

Backend
- Build a Ruby on Rails server with RESTful JSON endpoints
- Build a database with three tables: users, decks, entries
- The user to decks association will be one to many
- The decks to words association will be many to many
- full CRUD controller methods for the entries and decks tables

Frontend
- React app with one container component, 7 screen components, 2 "component components" and 2 shared components
- Set up axios calls for full CRUD on decks and entries tables
- Hold deck and entry information in state variables within the container component
- Use both CSS Flexbox and/or Grid
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
<img src="https://i.imgur.com/Z469cH9.png" alt="home" width="200"/><img src="https://i.imgur.com/gcXgDob.png" alt="deck" width="200"/>  
  
  
Some screens showing how post, update, and delete will work.  
<img src="https://i.imgur.com/ipIPjen.png" alt="edit entry" width="200"/><img src="https://i.imgur.com/rx9OUUe.png" alt="create deck" width="200"/><img src="https://i.imgur.com/oM3kwqI.png" alt="create entry" width="200"/>  
  
  
Users will be able to review the term and details for each entry in the deck and navigate to different screens via the hamburger.  
<img src="https://i.imgur.com/UdeZfci.png" alt="word front" width="200"/> <img src="https://i.imgur.com/Jhq4mre.png" alt="word back" width="200"/> <img src="https://i.imgur.com/QRNEkPt.png" alt="hamburger" width="200"/>  
  
  
In an earlier plan, editing the deck and its entries occurred in one screen. Not sure how this could be implemented, I decided against it. However, I still want to include this idea in case it is possible as a post-MVP.  
<img src="https://i.imgur.com/YsLL1LD.png" alt="deck" width="200"/> <img src="https://i.imgur.com/dJRpfyy.png?1" alt="manage" width="200"/> <img src="https://i.imgur.com/KoTgcL0.png?1" alt="create" width="200"/> <img src="https://i.imgur.com/sPjGA60.png?1" alt="create/manage bottom" width="200">  
  
  
#### Desktop
<img src="https://i.imgur.com/IuSUQTv.png" alt="signup" width="400"/> <img src="https://i.imgur.com/VjdeYCQ.png" alt="signin" width="400"/>  
  
  
The same home and deck view on desktop:  
<img src="https://i.imgur.com/RkESP1L.png" alt="home" width="400"/> <img src="https://i.imgur.com/SXxHhYS.png" alt="deck" width="400"/>  
  
  
Desktop CRUD:  
<img src="https://i.imgur.com/4dUuom0.png" alt="edit entry" width="400"/> <img src="https://i.imgur.com/oXKhypH.png" alt="create deck" width="400"/> <img src="https://i.imgur.com/hcV8vp1.png" alt="create entry" width="400"/>  
  
  
Reviewing entries:  
<img src="https://i.imgur.com/0kqZDYZ.png" alt="word front" width="400"/> <img src="https://i.imgur.com/RXinrxZ.png" alt="word back" width="400"/>  
  
  
Desktop version of my "earlier plan" that I hope might be possible at some point:  
<img src="https://i.imgur.com/pUDbRmW.png" alt="deck" width="400"/> <img src="https://i.imgur.com/GFA2uYB.png" alt="manage" width="400"/> <img src="https://i.imgur.com/Oort2w2.png" alt="create" width="400"/>  

#### Component Tree

QUESTION:Since entry is a nested table within deck, should they be in the same component container in React?

![Flashy Component Tree](https://i.imgur.com/tbhj69e.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ icons
|__ components/
     |__ Deck
     |__ Entry
     |__ shared/
         |__ Layout
         |__ Nav
|__ containers
    |__ Flashcards
|__ screens/
    |__ DeckDetail
    |__ DeckForm
    |__ Decks
    |__ EntryDetail
    |__ EntryForm
    |__ SignIn
    |__ SignUp
|__ services/
    |__ apiConfig
    |__ decks
    |__ entries
    |__ users
|__ App.css
|__ App.js
|__ package.json

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Backend tables      |     H    |     1 hr       |               |    TBD      |
| Controllers & Models|     H    |     1 hr       |               |    TBD      |
| Seed data           |     H    |     1 hr       |               |    TBD      |
| API calls           |     H    |     2 hrs      |               |    TBD      |
| App.js routing      |     H    |     1 hr       |               |    TBD      |
| Containers setup    |     H    |     1 hr       |               |    TBD      |
| Screens setup       |     H    |     1 hr       |               |    TBD      |
| Components, Layout  |     H    |     1 hr       |               |    TBD      |
| Layout              |     H    |     1 hr       |               |    TBD      |
| Nav - w/o auth      |     H    |     2 hrs      |               |    TBD      |
| SignUp              |     H    |     2 hrs      |               |    TBD      |
| SignIn              |     H    |     2 hrs      |               |    TBD      |
| SignOut             |     H    |     2 hrs      |               |    TBD      |
| Nav - w/ auth       |     H    |     1 hr       |               |    TBD      |
| Decks               |     H    |     1 hr       |               |    TBD      |
| Deck                |     H    |     1 hr       |               |    TBD      |
| DeckDetail          |     H    |     2 hrs      |               |    TBD      |
| Entry               |     H    |     1 hr       |               |    TBD      |
| EntryDetail         |     H    |     2 hrs      |               |    TBD      |
| DeckForm            |     H    |     2 hrs      |               |    TBD      |
| EntryForm           |     H    |     2 hrs      |               |    TBD      |
| Global styles (CSS) |     M    |     2 hrs      |               |    TBD      |
| Grid (forms)        |     M    |     2 hrs      |               |    TBD      |
| Flex (decks/entries)|     M    |     2 hrs      |               |    TBD      |
| Media queries       |     M    |     2 hrs      |               |    TBD      |
| Flip effect         |     L    |     2 hrs      |               |    TBD      |
| Deck sharing        |     L    |     2 hrs      |               |    TBD      |
| AWL deck generator  |     L    |     2 hrs      |               |    TBD      |
| Linting             |     L    |     2 hrs      |               |    TBD      |
| TOTAL               |          |    46 hrs      |               |     TBD     |
  
  
### Server (Back End)

#### ERD Model

![Flashy ERD](https://i.imgur.com/IeGFjGE.jpg)
<br>

***

## Post-MVP

- Deck sharing - Enable users to make decks public and search/share/save other users' decks
- Flip effect - Animate entry detail screen so that the card "flips" between the term and its details
- AWL Deck Generator - Include a textbox for pasting articles that will scan and produce a list of article words that are in the Academic Word List (AWL) and create a deck from these words

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
