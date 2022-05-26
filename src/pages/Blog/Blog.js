import React from "react";
import PageTitle from "../../hooks/PageTitle";
import "./Blog.css";
import code from '../../images/code.png';

const Blog = () => {
  return (
    <div className="blogs_page">
      <PageTitle title="Blogs" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <article className="single_Blog">
              <h2>
                1. How will you improve the performance of a React Application
              </h2>
              <p>
                1. <b>Use binding functions in constructors:</b> By adding an
                arrow function in a class, we add it as an object and not as the
                prototype property of the class. And if we use the component
                multiple time, there will be various instances of these
                functions within each object of the component. The most reliable
                way to use functions is to bind them with the constructor.{" "}
                <br />
                2. b Avoid inline style attributes: The browser often invests a
                lot of time rendering, when styles are implied inline. Scripting
                and rendering take time because the browser has to plan all the
                React style rules to the CSS properties. Creating a separate
                style.js file and importing it into the component is a faster
                method. <br />
                3. <b>Avoid extra tags by using React fragments:</b> Using react
                fragments decreases the no. of additional tags and satisfies the
                necessity of having a single parent element in the component.{" "}
                <br />
                4.{" "}
                <b>
                  Avoid bundling all of the front end code in a single file:
                </b>{" "}
                By splitting the files into resource and on-demand code files we
                can reduce the time consumed in presenting bundled files to the
                browser transformers.
              </p>
            </article>

            <article className="single_Blog">
              <h2>
                2. What are the different ways to manage a state in a React
                application?
              </h2>
              <p>
                The initial state is taken as an argument in useState hook.
                Initially when the React component renders, and returns two
                values. The values are the state update function and the current
                state. For displaying the current state of the component current
                state is used and for changing the current state the state
                update function is used. <br />
                useContext helps in passing the props down the components tree.
                React’s Context API helps in passing the props between the
                grandfather component to the grandchild component. This process
                doesn’t bother the other React Components which are available in
                the chain.
              </p>
            </article>

            <article className="single_Blog">
              <h2>
                3. How does prototypical inheritance work?
              </h2>
              <p>
              A prototype is an object that is used as a blueprint for creating other objects. When an object is created using a prototype, the new object inherits all of the properties and methods of the prototype. <br /> 
              The advantage of using prototypes is that you don't have to create a new instance of an object to add new properties and methods to it. You can simply add them to the prototype, and they will be available to all instances of that object.<br /> 

Another advantage of prototypes is that they allow you to share code between objects. If you have two objects that need to share some code, you can put that code in a prototype, and both objects will have access to it.<br /> 

The disadvantage of prototypes is that they can make your code harder to understand. When you're looking at a piece of code, it can be hard to tell where the properties and methods are coming from. Is that property coming from the object itself, or is it coming from the prototype?
              </p>
            </article>

            <article className="single_Blog">
              <h2>
                4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
              </h2>
              <p>
              <img src={code} alt="" />
              </p>
            </article>

            <article className="single_Blog">
              <h2>
                5. What is a unit test? Why should write unit tests?
              </h2>
              <p>
              A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. <br/>
              To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
              Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
