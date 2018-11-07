---
templateKey: news
title: "More digital accessibility in the EU institutions"
introduction: Digital accessibility enables all people, including those with disabilities, to access electronic resources (including web pages, software, mobile devices, e-readers, etc.) and communications. In the tech sessions events, colleagues from the Parliament’s DG TRAD presented their efforts to make the web applications used in-house more accessible. So what guidelines and principles should you follow for a universal design for all?
picture: /img/more-digital-accessibility-in-eu-institutions.jpg
---

**Digital accessibility enables all people, including those with disabilities, to access electronic resources (including web pages, software, mobile devices, e-readers, etc.) and communications. In the tech sessions events, colleagues from the Parliament’s DG TRAD presented their efforts to make the web applications used in-house more accessible. So what guidelines and principles should you follow for a universal design for all?**

In both tech sessions events in Brussels and Luxembourg, Juan Carreiras and François Weykmans, IT specialists from the Parliament’s DG TRAD, presented their team’s efforts to make EP’s web applications more accessible to all users, together with Tanja Kleut, accessibility tester and specialist.

First, it’s important to understand why digital accessibility matters. Digital accessibility enables all people, including those with disabilities, to access electronic resources (including web pages, software, mobile devices, e-readers, etc.) and communications. As Tanja, who is blind, clearly demonstrated through a demo, applications and websites that are not designed with accessibility in mind cannot be properly understood by people that need to use assistive technologies (like screen readers and keyboard shortcuts) to interact with them, as happens with visual impaired persons (VIPs), or people that have difficulties using the mouse, for example.

Digital accessibility is not just a nice thing to have for users with disabilities; it is a legal requirement and [Directive (EU) 2016/2102 of the European Parliament and of the Council of 26 October 2016 on the accessibility of the websites and mobile applications of public sector bodies](http://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1511452832814&uri=CELEX:32016L2102) has reinforced that.

Designing with accessibility in mind might look more time consuming or expensive, but it doesn’t have to be; early action is essential to better integrate digital accessibility in any IT development project’. Even before the start of the project itself, it’s fundamental to raise the IT teams’ awareness on digital accessibility and its guidelines, choose the right technological framework, and prepare an appropriate graphical charter (a template with all the graphical components that a web application can use: buttons, sliders, tables, menus, icons,....). By doing this before and independently of the project, it’s possible to apply accessibility principles easily right from the start and, more importantly, to any given project without additional impacts, as all the elements are already in place. And this can actually end up benefiting all users, by improving general usability and design.

#### How to make web applications more accessible?

Four main principles need to be considered to make applications accessible:

- **Perceivability** - If an image cannot be seen by a VIP, there must be some alternative text behind it that can be read by the screen reader so the user knows what’s there. The file name and the Alt text added in the html code are very important. More and more web designers and developers are aware of this; Facebook and Microsoft, for example, already offer automatic image recognition that is read out to the user; but this isn’t yet common practice.
- **Operability** - this is about making the input methods functionally available to different input devices. For VIPs, the keyboard access is extremely important because they cannot use the mouse pointer, so all commands must be accessible with the keyboard only.
- **Understandability** - Sometimes an icon with an envelope is used as a command to ‘send’ an email. If the alt text or tooltip on that icon is just ‘envelope icon’, it does not help the VIP understand that there is a button that should be used to ‘send’ an email. The function needs to be described, not just the image.
- **Robustness** - this has to do with ensuring compatibility with different environments, including assistive technologies. For screen reading software, this means that the computer or the screen reader will not be slowed down by an application, or vice versa. The interaction needs to go smoothly as if no screen reader was active.

Best practices for making web applications more accessible are defined by the [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/), created by the World Wide Web Consortium (W3C), which aims at improving web accessibility for people with disabilities and covers its different components, including web content, web browsers and media players, authoring tools, and evaluation tools.

As part of these efforts, the WAI published the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/), a set of guidelines that specifies how to make content accessible, primarily for people with disabilities but also for all users, and in different types of devices.

More recently, the technical specifications [WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)](http://www.w3.org/TR/wai-aria-1.1/) were launched to address how to increase the accessibility of web pages, in particular, dynamic content and user interface components developed with Ajax, HTML, JavaScript, and related technologies. ‘Roles’ are an example of attributes that are added to HTML markup to indicate the type of element that is presented. They are applied to widgets that do not already contain built-in semantic information. For example, when used on widgets such as tabs, screen readers are able to use this information to recognise this element and read it out as a tab. 'aria-selected' attributes indicate that the tab is selected or highlighted on the screen so that screen readers are able to read the status of the attribute.

HTML 5, the current major version of the HTML standard, has introduced many new features that allow for better accessibility, like the new structure elements: each tag (header, footer, nav, main, etc.) now has implicit ARIA roles. The ‘div’ tag has been used for this purpose, but screen readers cannot interpret all its elements and need more information and semantics (e.g. explicit ARIA roles).

#### How to test accessibility?

User input and testing are key in improving digital accessibility.

Try it yourself, in the applications you are developing or using at the office:

- Unplug your mouse and/ or turning off your trackpad
- Turn on High Contrast Mode
- Turn off Images
- Check for Captions or Transcripts
- Test with Chrome Accessibility Developer Tools
- Test with Screen Readers (JAWS, NVDA, etc.)

During the sessions, the team gave some basic practical examples of the application of WAI-ARIA and HTML 5 specifications for accessibility.

As far as screen readers are concerned, JAWS for Windows (commercial tool) and NVDA (open source) are the most common ones. Tanja demonstrated how the screen reader can read groups of tabs, autocomplete fields, data tables and horizontal sliders in the correct way, provided the correct HTML code is used. As François Weykmans explained, ‘we need to define clearly where are the components of the page and what is what’: menus, articles, navigation, banners, headers, footers, columns or search boxes should all be defined accordingly, so the screen reader can recognise them as such. Without it, VIP users will have no information and will not be able to navigate. ‘What you see on the interface should be exactly the same thing you get when using an assistive software.’ concludes Tanja.

![François, Tanja and Juan at the Tech session by DIGITEC](/img/more-digital-accessibility-in-eu-institutions-1.jpg)

More on digital accessibility

- [How to build an accessible webpage](https://www.w3.org/WAI/tutorials/page-structure/regions/)
- [How to use ARIA](https://www.w3.org/TR/aria-in-html/)
- [Introduction to Web Accessibility](http://ep-technology.tumblr.com/post/167943079129/introduction-to-web-accessibility)
- [The technology at the heart of screen readers – a brief history of speech synthesis](http://ep-technology.tumblr.com/post/167943181424/the-technology-at-the-heart-of-screen-readers-a)
- [Assistive technologies: screen readers for visually impaired colleagues](http://ep-technology.tumblr.com/post/160985046944/assistive-technologies-screen-readers-for/embed)
- [The importance of inclusive banking systems](http://ep-technology.tumblr.com/post/161200286359/the-importance-of-inclusive-banking-systems-every)
- [Accessibility improvements in Windows 10 Creators Update](http://ep-technology.tumblr.com/post/167943306494/accessibility-improvements-in-windows-10-creators)
- [Digital accessibility in the European Parliament](http://ep-technology.tumblr.com/post/160799293284/digital-accessibility-in-the-european-parliament)
- [Lunchtime Presentation on Digital Accessibility in the EP](http://ep-technology.tumblr.com/post/167943736679/lunchtime-presentation-on-digital-accessibility-in)
