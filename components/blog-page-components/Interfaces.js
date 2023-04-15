/**DEVELOPER PORTFOLIO INTERFACES BLOG ARTICLE COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio Interfaces Blog Article Component:
This component renders an article on the concept of Interfaces in JavaScript and other object-oriented programming languages.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Interfaces() {
  return (
    <div className="interface-page bg-charcoal-black flex justify-center items-center w-full h-auto text-white">
      <div className="interface-contents-container w-11/12 mt-8">
        <h1 className="interface-blog-title text-3xl underline">
          Interfaces in object-oriented programming languages and
          prototype-based languages
        </h1>
        <p className="blog-post-date mt-2">Posted: 15 April 2023</p>

        {/* Section One: Introduction to Object-Oriented Programming */}
        <section className="oop-intro">
          <h3 className="interface-blog-headings text-xl font-medium underline mt-8">
            What is Object-Oriented Programming (OOP)?
          </h3>
          <p className="mt-3">
            Object-oriented programming (OOP) is an extremely popular and useful
            programming paradigm that organizes code around objects, which are
            instances of classes. Objects are the basic units of Object-Oriented
            Programming.
          </p>
          <p className="mt-3">
            A class is a blueprint or a template for creating objects that
            encapsulate data (attributes or properties) and the behavior
            (methods or functions) that operate on that data. Objects can
            interact with each other by calling their methods, sending messages,
            or passing data, which makes OOP suitable for building complex and
            modular applications.
          </p>
          <p className="mt-3">
            Objects can emulate real-world entities, like a person or car. A
            person, for example, will have their own common attributes and
            behaviors. Those attributes include eye-color, hair-color, etc.,
            while the functional behaviors include talking, walking, or running.
          </p>
          <p className="mt-3">
            Some of the benefits associated with an object-oriented programming
            approach include code reuse, shorter development times, increased
            productivity, and easier maintenance and testing of software
            systems.
          </p>
        </section>

        {/* Section Two: Interfaces in Object-Oriented Programming */}
        <section className="interface-intro">
          <h3 className="interface-blog-headings text-xl underline mt-3">
            What are Interfaces in Object-Oriented Programming?
          </h3>
          <p className="mt-3">
            Interfaces are a key concept in Object-Oriented Programming. An
            interface allows us to enforce a certain structure of a class and
            defines a collection of method signatures that this class can
            implement. It defines the behavior of an object without specifying
            its implementation. In other words, an interface defines what
            methods an object should have, but not how those methods should
            work. The implementation of the methods is left to the classes that
            implement the interface.
          </p>
          <h3 className="interface-blog-headings text-xl underline mt-3">
            What are the benefits of using Interfaces in Object-Oriented
            Programming?
          </h3>
          <p className="mt-3">
            Abstraction: <br />
            One of the four key pillars of OOP is "Abstraction". Abstraction
            involves showing only the relevant data and hiding all unnecessary
            complexities and details of an object from the user. Consider a
            television remote control as a great real-world example of
            abstraction - and think of this remote control as an object. It has
            a complex logic circuit board on the inside, and buttons on the
            outside that the user can press to interact with and access the
            relevant functionality. The user simply presses a button to, for
            example, flip between their favorite TV channels or stations. The
            user does not need to know how the remote control is working
            internally, to flip between TV channels or stations. The methods in
            an interface do not contain bodies. They have to be implemented by a
            class before you can access them. Interfaces are used to achieve
            abstraction, where the interface, hides all unnecessary
            implementation from the user.
          </p>
          <p className="mt-3">
            Enforcing Strict Typing: <br />A key reason that software developers
            use interfaces is to ensure that all classes are built according to
            rules, or contracts, outlining what methods and properties must be
            implemented. Using interfaces is also a way of enforcing strict
            typing to a certain degree.
          </p>
        </section>

        {/* Section Three: Why JavaScript does not use Interfaces */}
        <section className="interface-exclusion">
          <h3 className="interface-blog-headings text-xl underline mt-3">
            Why does JavaScript not really use Interfaces?
          </h3>
          <p className="mt-3">
            In comparison to object-oriented programming languages such as
            Python or Java, JavaScript has no built-in or native way of creating
            or implementing interfaces. Since interfaces enforce the structure
            of what classes should look like and JavaScript doesn't use classes
            to create objects, this makes sense.
          </p>
          <p className="mt-3">
            Objects in JavaScript can be created using either object literals or
            constructor functions. Below is an example of creating an object
            using an object literal:
          </p>
          <div className="js-object-container w-100 mt-8 flex justify-center items-center">
            <img
              className="js-object"
              src="/static/js-object-literal.png"
              alt="example of JS object created using object-literal"
            />
          </div>
        </section>

        {/* Section Four: Emulating interfaces in JavaScript */}
        <section className="interface-emulation">
          <h3 className="interface-blog-headings text-xl underline mt-8">
            How can you emulate interfaces in JavaScript?
          </h3>
          <p className="mt-3">
            As we have discussed earlier, interfaces are one of the most useful
            tools in an object-oriented programming language. We have also
            discussed that JavaScript has no built-in or native way of creating
            or implementing interfaces. With that in mind, we will explore the
            approaches to emulate interfaces in JavaScript.
          </p>
          <p className="mt-3">
            The first approach is "Describing Interfaces with Comments". The
            easiest and least effective way of emulating an interface is with
            comments. Mimicking the style of other object-orientated languages,
            the interface and implements keywords are used but are commented out
            so they do not cause syntax errors. However, this doesn't emulate
            the interface functionality very well. There is no checking to
            ensure that it does implement the correct set of methods. No errors
            are thrown to inform the programmer that there is a problem. That
            being said, there are some benefits to this approach. It's easy to
            implement, requiring no extra classes or functions. It promotes
            reusability because classes now have documented interfaces and can
            be swapped out with other classes implementing the same ones.
          </p>
          <p className="mt-3">
            The second approach, "Emulating Interfaces with Attribute Checking",
            is a little stricter. All classes explicitly declare which
            interfaces they implement, and these declarations can be checked by
            objects wanting to interact with these classes. The interfaces
            themselves are still just comments, but you can now check an
            attribute to see what interfaces a class says it implements. There
            are several benefits to this approach. You are documenting what
            interfaces a class implements. You will see errors if a class does
            not declare that it supports a required interface. You can enforce
            that other programmers declare these interfaces through the use of
            these errors.
          </p>
          <p className="mt-3">
            The third approach is "Emulating Interfaces with Duck Typing". In
            the end, it doesn't matter whether a class declares the interfaces
            it supports, as long as the required methods are in place. That is
            where duck typing comes in. Duck typing was named after the saying,
            "If it walks like a duck and quacks like a duck, it's a duck." It is
            a technique to determine whether an object is an instance of a class
            based solely on what methods it implements, but it also works great
            for checking whether a class implements an interface. The idea
            behind this approach is simple - if an object contains methods that
            are named the same as the methods defined in your interface, it
            implements that interface. Using a helper function, you can ensure
            that the required methods are there. This differs from the other two
            approaches in that it uses no comments.
          </p>
        </section>

        {/* Section Five: Strict Mode in JavaScript */}
        <section className="strict mode">
          <h3 className="interface-blog-headings text-xl underline mt-8">
            What is Strict Mode in JavaScript?
          </h3>
          <p className="mt-3">
            We can safely assume that software developers would love to write
            code that is better, secure, and cleaner with little to no errors.
          </p>
          <p className="mt-3">
            Enter JavaScript Strict Mode - strict mode is a feature in
            JavaScript introduced in ECMAScript 5 that enforces stricter syntax
            rules, parsing and error handling on the code at run time.
          </p>
          <h3 className="interface-blog-headings text-xl underline mt-3">
            Why should you use Strict Mode in JavaScript?
          </h3>
          <p className="mt-3">
            When strict mode is enabled, it allows the developer to write code
            that is cleaner, more secure, and changes previously accepted "bad
            syntax" into real errors and catch errors and bugs that might
            otherwise go unnoticed in standard JavaScript.
          </p>
          <p className="mt-3">
            Strict mode, in JavaScript, can be enabled by adding the string "use
            strict" to the top of a script file for an entire script, or locally
            within a function. Below is an example:
          </p>
          <div className="strict-photo-container w-100 mt-8 mb-8 flex justify-center items-center">
            <img
              className="strict-photo"
              src="/static/js-strict-mode.png"
              alt="example code of strict mode"
            />
          </div>
        </section>

        {/* Section Six: TypeScript */}
        <section className="typescript">
          <h3 className="interface-blog-headings text-xl underline mt-3">
            What is TypeScript?
          </h3>
          <p className="mt-3">
            Developed and maintained by Microsoft, TypeScript is a
            statically-typed programming language. It is a superset of
            JavaScript, which means that any valid JavaScript code is also valid
            TypeScript code.
          </p>
          <p className="mt-3">
            It was designed to address some of the limitations of JavaScript, by
            adding static typing, classes, interfaces, and other object-oriented
            features to the JavaScript programming language, especially in
            larger projects where code maintenance and scalability become
            increasingly important. With TypeScript, developers can catch errors
            and bugs at compile-time rather than runtime, which can save a lot
            of time and effort in debugging.
          </p>
          <h3 className="interface-blog-headings text-xl underline mt-3">
            How can TypeScript be used to create Interfaces?
          </h3>
          <p className="mt-3">
            As mentioned, one of the main features of TypeScript is its ability
            to create interfaces. Interfaces in TypeScript are similar to
            interfaces in other object-oriented languages, such as Java, Python
            or C#. They allow you to define a contract for the structure of an
            object, including its properties and methods.
          </p>
          <p className="mt-3">
            Below is an example of an interface definition in TypeScript. In
            this example, the "Person" interface defines a structure/contract
            for an object that has a "name" property of type "string", an "age"
            property of type "number", and a greeting method of type "string".
          </p>
          <div className="person-interface-container w-100 mt-5 mb-5 flex justify-center items-center">
            <img
              className="person-interface"
              src="/static/person-interface.png"
              alt="example code of an interface definition using TypeScript"
            />
          </div>
          <h3 className="interface-blog-headings text-xl underline mt-3">
            How does TypeScript enforce strict typing?
          </h3>
          <p className="mt-3">
            Another important feature of TypeScript is its ability to enforce
            strict typing through its static type checking feature.
          </p>
          <p className="mt-3">
            In TypeScript, developers must declare the data type for variables,
            function parameters, and function return values defined in their
            code. Enforcing strict typing means that variables can only be
            assigned values of the correct data type.
          </p>
          <p className="mt-3">
            Consider the example below. In this example, we define a variable
            "age" with the data type "string". When we try to assign it the
            value "40", which is of data type number, TypeScript throws an error
            at compile-time, preventing this error from occurring at runtime.
          </p>
          <div className="strict-typing-container w-100 mt-5 flex justify-center items-center">
            <img
              className="strict-typing"
              src="/static/strict-typing.png"
              alt="example code of an interface definition using TypeScript"
            />
          </div>
          <p className="mt-3 mb-8">
            By enforcing strict typing, TypeScript helps developers catch errors
            earlier in the development process, resulting in more reliable and
            maintainable code.
          </p>
        </section>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
Tailwind CSS:
Tailwind CSS is a utility-first CSS framework, enabling me to style this portfolio and it's contents faster and easier.
Referenced the Tailwind CSS documentation website for all utility classes used to style this portfolio website.
https://tailwindcss.com/
*/
