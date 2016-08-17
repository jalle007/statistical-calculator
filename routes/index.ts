/*
 * GET home page.
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};



export function hello(req: express.Request, res: express.Response) {
  
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet() {
      return "Hey " + this.greeting;
    }
  }

  let greeter = new Greeter("");
  res.write(greeter.greet());
  //res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
