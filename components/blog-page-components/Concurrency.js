/**DEVELOPER PORTFOLIO CONCURRENCY BLOG ARTICLE COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio Concurrency Blog Article Component:
This component renders an article on the concept of "Concurrency in Web Development."

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Concurrency() {
  return (
    <div className="concurrency-page bg-charcoal-black flex justify-center items-center w-full h-auto text-white">
      <div className="concurrency-contents-container w-11/12 mt-8">
        <h1 className="concurrency-blog-title text-3xl underline">
          Concurrency in Web Development
        </h1>
        <p className="blog-post-date mt-2">Posted: 19 April 2023</p>

        {/* Section One: Introduction to Concurrency */}
        <section className="concurrency-intro">
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            What is Concurrency?
          </h3>
          <p className="mt-3">
            Concurrency is an essential concept in modern web development. It is
            the ability of a system to execute multiple tasks or processes
            simultaneously. In the context of web development, concurrency plays
            a crucial role in improving the performance and responsiveness of
            web applications.
          </p>
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            What are the methods of implementing concurrency?
          </h3>
          <p className="mt-3">
            The traditional methods of implementing concurrency are threads and
            processes. A thread is the unit of execution within a process. A
            process can have one or more threads, but a thread cannot contain a
            process. In threading, multiple threads are created within a single
            process, and each thread executes a separate task concurrently.
            Processes, on the other hand, are separate instances of an
            application that can execute independently of each other.
          </p>
        </section>

        {/* Section Two: Concurrency with Node.js */}
        <section className="concurrency-nodejs">
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            How is Concurrency implemented with Node.js?
          </h3>
          <p className="mt-3">
            Node.js is a popular platform for implementing concurrency in web
            development. Concurrency, in Node.js, is achieved through the use of
            event-driven, non-blocking I/O programming model. It runs on a
            single thread, but it can handle many concurrent connections without
            blocking, thanks to its asynchronous programming model.
          </p>
        </section>

        {/* Section Three: Async Programming and Concurrency */}
        <section className="async-concurrency">
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            What role does asynchronous programming play in concurrency?
          </h3>
          <p className="mt-3">
            As discussed earlier, the traditional methods of implementing
            concurrency are threads and processes. Another method of
            implementing concurrency, that has gained popularity in recent
            years, is Asynchronous programming. Asynchronous programming is
            vital for concurrency to occur successfully with modern day
            applications and websites. It allows tasks to execute concurrently
            without blocking the execution of other tasks in the application
            workflow.
          </p>
          <p className="mt-3">
            In Node.js, asynchronous programming is implemented using call-back
            functions, promises, and async/await syntax. Call-back functions are
            functions that are passed as arguments to other functions and are
            executed when the original function has completed its task. Promises
            are objects that represent the eventual completion or failure of an
            asynchronous operation. Async/await syntax is a more recent addition
            to JavaScript/Node.js and allows developers to write asynchronous
            code in a more synchronous style.
          </p>
        </section>

        {/* Section Four: Web APIs and Concurrency */}
        <section className="web-api-concurrency">
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            How are web APIs related to implementing concurrency?
          </h3>
          <p className="mt-3">
            Web APIs are another important component of implementing concurrency
            in web development. It can be related to implementing concurrency in
            a few ways.
          </p>
          <p className="mt-3">
            Firstly, web APIs are commonly used to facilitate communication
            between different applications and systems. When multiple clients
            are accessing the same web API simultaneously, concurrency issues
            can arise if the API is not designed to handle multiple requests at
            once. Therefore, implementing concurrency techniques such as
            locking, synchronization, and caching can help to mitigate these
            issues and ensure that the API can handle multiple requests in
            parallel without conflicts.
          </p>
          <p className="mt-3">
            Secondly, web APIs can be designed to take advantage of concurrency
            to improve performance and scalability. For example, an API can be
            designed to use asynchronous programming techniques, such as
            call-backs or promises, to allow multiple requests to be processed
            concurrently without blocking the event loop. This can help to
            improve the overall throughput and responsiveness of the API.
          </p>
          <p className="mt-3">
            Thirdly, some web APIs are designed specifically to support
            concurrent processing, such as message queues or event-driven
            architectures. These APIs allow multiple tasks to be executed
            concurrently by dispatching messages or events to different worker
            processes or threads. This can help to improve the scalability and
            fault tolerance of the system by allowing tasks to be processed
            independently and in parallel.
          </p>
        </section>

        {/* Section Five: Event-loop in JavaScript */}
        <section className="event-loop-concurrency">
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            What is the event-loop in JavaScript and how does it relate to
            concurrency?
          </h3>
          <p className="mt-3">
            The event loop in JavaScript is responsible for managing the
            concurrency of the runtime, by ensuring that only one function is
            executed at a time and allowing asynchronous operations to be
            executed in the background. It is a fundamental component of the
            JavaScript runtime that is responsible for managing the execution of
            code in a concurrent manner, and continuously checks the call stack
            and the message queue, and decides which function to execute next.
          </p>
          <p className="mt-3">
            When a JavaScript program is executed, it is run in a single thread.
            However, JavaScript can still perform concurrent operations by using
            asynchronous call-backs and events. For example, when a user clicks
            a button on a webpage, an event is triggered and a call-back
            function is added to the message queue. The event loop continuously
            checks the message queue and when it finds the call-back function,
            it executes it.
          </p>
          <p className="mt-3">
            In practice, this means that JavaScript can perform multiple tasks
            concurrently without blocking the main thread or causing the program
            to crash. This is particularly important for web development, where
            JavaScript is used to build interactive web applications that
            respond to user input in real-time.
          </p>
        </section>

        {/* Section Six: Comparing Oracle and MongoDB database concurrency */}
        <section className="oracle-mongo-comparison">
          <h3 className="concurrency-blog-headings text-xl font-medium underline mt-8">
            How does Oracle and MongoDB support database concurrency?
          </h3>
          <p className="mt-3">
            Oracle supports database concurrency through a combination of
            locking and multi-versioning.
          </p>
          <p className="mt-3">
            Locking is a technique where resources are locked by transactions to
            prevent conflicts between concurrent transactions. Oracle uses
            various types of locks, such as row locks, table locks, and shared
            locks, to control access to resources. Row locks are the most
            commonly used type of lock, as they allow multiple transactions to
            access different rows in the same table simultaneously without
            interfering with each other.
          </p>
          <p className="mt-3">
            Multi-versioning is a technique where multiple versions of a row are
            kept in the database to allow concurrent access without conflicting
            updates. When a transaction modifies a row, Oracle creates a new
            version of the row and stores it in the database. Other transactions
            can continue to read the old version of the row while the
            transaction is in progress, avoiding contention.
          </p>
          <p className="mt-3">
            Overall, Oracle's support for database concurrency is designed to
            allow multiple transactions to access the same data concurrently
            while ensuring that transactions do not interfere with each other,
            and that data consistency is maintained.
          </p>
          <p className="mt-3">
            In comparison, MongoDB supports database concurrency through
            techniques called document-level locking and concurrency control.{" "}
          </p>
          <p className="mt-3">
            With document-level locking, MongoDB locks individual documents,
            rather than entire collections when they are being modified. This
            allows multiple transactions to modify different documents in the
            same collection concurrently without waiting for each other.
          </p>
          <p className="mt-3">
            With concurrency control, MongoDB does not use locks to control
            access to resources. Instead, MongoDB relies on version numbers to
            detect conflicts between concurrent updates. When a document is
            updated, MongoDB increments its version number. If multiple
            transactions attempt to update the same document concurrently,
            MongoDB will compare the version numbers and reject any updates that
            conflict with the latest version of the document.
          </p>
          <p className="mt-3 mb-8">
            Overall, MongoDB's support for database concurrency is designed to
            allow multiple transactions to access the same data concurrently
            while ensuring that conflicts are detected and resolved. This allows
            concurrent reads of the data/resources but locks the entire document
            during writes, preventing users from modifying the same data
            simultaneously. Multiple users can read the same data concurrently
            but only one user can modify that data at a time.
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
