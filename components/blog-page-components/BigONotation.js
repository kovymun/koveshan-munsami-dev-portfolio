/**DEVELOPER PORTFOLIO BIG-O-NOTATION BLOG ARTICLE COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio Big-O-Notation Blog Article Component:
This component renders an article on the concept of "Big O notation basics for web developers."

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function BigONotation() {
  return (
    <div className="big-o-notation-page bg-charcoal-black flex justify-center items-center w-full h-auto text-white">
      <div className="big-o-notation-contents-container w-11/12 mt-8">
        <h1 className="big-o-notation-blog-title text-3xl underline">
          Big-O-Notation basics for Web Developers
        </h1>
        <p className="blog-post-date mt-2">Posted: 24 April 2023</p>

        {/* Section One: Introduction to Big-O-Notation */}
        <section className="big-o-notation-intro">
          <h3 className="big-o-notation-blog-headings text-xl font-medium underline mt-8">
            What is Big-O-Notation?
          </h3>
          <p className="mt-3">
            As we are aware, to be a good software developer, you must be able
            to do more than write code that simply works. You want to be able to
            write code that works as effectively and efficiently as possible.
            Thus, you must be able to analyze a piece of code concerning its
            performance in terms of speed/time.
          </p>
          <p className="mt-3">
            Enter, Big O Notation! Big O Notation is a mathematical concept that
            is used to analyze the efficiency of algorithms. It is a measure of
            how much time an algorithm takes to complete as a function of its
            input size, allowing developers to determine the efficiency of an
            algorithm for a given task.
          </p>
          <p className="mt-3">
            In simple terms, Big O Notation tells us how an algorithm's
            performance scales with input size. The "O" in Big O stands for
            "order of magnitude", and the notation is used to describe the upper
            bound of an algorithm's performance. This upper bound is represented
            by a function, which shows the growth rate of the algorithm's
            performance as the input size increases.
          </p>
          <h3 className="big-o-notation-blog-headings text-xl font-medium underline mt-8">
            Why should Web Developers know about Big-O-Notation?
          </h3>
          <p className="mt-3">
            Web developers should know about Big O Notation because it is
            crucial for optimizing the performance of web applications. When
            designing algorithms for tasks such as searching, sorting, and data
            manipulation, it is important to choose an algorithm with a time
            complexity that scales well with the size of the input. This ensures
            that the application will be able to handle large amounts of data
            efficiently, without slowing down or crashing.
          </p>
          <p className="mt-3">
            In addition, knowledge of Big O Notation can help developers
            identify and optimize slow or inefficient code, leading to better
            overall performance and a better user experience. It can also help
            in the selection of appropriate data structures, which can further
            improve the efficiency of algorithms and reduce resource usage.
          </p>
        </section>

        {/* Section Two: Big-O-Notation Quadratic function */}
        <section className="quad-function">
          <h3 className="big-o-notation-blog-headings text-xl font-medium underline mt-8">
            What is a quadratic function (O(n²)) in Big-O-Notation?
          </h3>
          <p className="mt-3">
            In Web Development, the larger or more complex the algorithm is, the
            more time and memory it needs to execute. Within Big O Notation,
            there are seven main mathematical functions that are used to measure
            the complexity and performance of an algorithm. Each function
            describes how an algorithm's complexity changes as the size of the
            input to the algorithm changes. One of those functions is the
            quadratic function (O(n²)).
          </p>
          <p className="mt-3">
            O(n²) represents an algorithm whose performance is directly
            proportional to the square of the size of the input data set. This
            is common with algorithms that involve nested iterations over a data
            set. As the size of the input of the algorithm increases, the
            complexity of the algorithm increases and the efficiency of the
            algorithm decreases.
          </p>
          <p className="mt-3">
            Consider the JavaScript code example presented below:
          </p>
          <div className="quad-function-container w-100 mt-6 flex justify-center items-center">
            <img
              className="quad-function"
              src="/static/quad-function.png"
              alt="example code quadratic function"
            />
          </div>
          <p className="mt-6">
            We declare an array, "lettersArr" holding two letters (essentially
            holding two elements, or input n = 2). We want our program to
            display all combinations of the letters in the array.
          </p>
          <p className="mt-3">
            To execute this, we define a function "logAll" and pass the
            "lettersArr" as a parameter. As the function executes, the outer
            loop is performing n = 2 iterations. Our inner loop also performs n
            = 2 iterations but also performs n = 2 iterations for every
            iteration of the outer loop. As such you have a Big O Notation O(n *
            n), or O(n²) computation, and for this example, the function
            executes 4 times O(4).
          </p>
          <p className="mt-3">
            Similarly, if we call the "logAll" function with an array of input
            size n = 10, the nested loop will execute 100 times. If we call it
            with an array of input size n = 100, the nested loop will execute 10
            000 times. As the input size increases, the time taken to execute
            the code increases rapidly, making it less efficient.
          </p>
        </section>

        {/* Section Three: Linear and Search Algorithms */}
        <section className="linear-binary-algo">
          <h3 className="big-o-notation-blog-headings text-xl font-medium underline mt-8">
            What is the difference between a linear search algorithm and a
            binary search algorithm?
          </h3>
          <p className="mt-3">
            Linear search and binary search are two common searching algorithms
            used in web and software development.
          </p>
          <p className="mt-3">
            A linear search is a simple algorithm that searches through every
            element in a list until it finds the target element or reaches the
            end of the list. It's rate of growth scales in direct proportion to
            the input. As the input grows, so do the number of operations,
            linearly. In terms of complexity, the Big O Notation for a linear
            search algorithm is O(n), where n represents the number of elements
            in the list. The bigger the list, the more time it takes to complete
            the search.
          </p>
          <p className="mt-3">
            Consider the JavaScript example presented below. The linearSearch
            function/algorithm is defined to return the index of a searched
            number within an array of input size n. Here we declare an array of
            numbers, with input n size = 8. No matter the size of the input, the
            function still searches through every element in a list until it
            finds the target element, thus the function needs to perform the
            same number of operations for every input. As such, its time
            complexity is linear, or O(n).
          </p>
          <div className="linear-search-container w-100 mt-5 flex justify-center items-center">
            <img
              className="linear-search"
              src="/static/linear-search-algo.png"
              alt="example code of a linear search algorithm"
            />
          </div>
          <p className="mt-5">
            In comparison, the binary search algorithm is a commonly used search
            algorithm that works efficiently on sorted arrays or lists. The
            algorithm repeatedly divides the search interval in half until the
            target value is found or the search interval becomes empty.
          </p>
          <p className="mt-3">
            The binary search algorithm has a time complexity of O(log n), where
            n is the number of elements in the array. This means that the
            algorithm's running time increases logarithmically with the size of
            the input array, making it much faster than linear search for large
            arrays.
          </p>
          <p className="mt-3">
            Consider the JavaScript example presented below as to how the binary
            search algorithm works:
          </p>
          <div className="binary-search-container w-100 mt-6 flex justify-center items-center">
            <img
              className="binary-search"
              src="/static/binary-search-algo.png"
              alt="example code of a binary search algorithm"
            />
          </div>
          <ol className="list-decimal ml-8 mt-8">
            <li>
              Here we declare an array of numbers, with input n size = 8
              (ensuring that this is a sorted array).
            </li>
            <li>
              We define two variables, lowerLimit and upperLimit, to the first
              and last indices of the array, respectively.
            </li>
            <li>
              Calculate the middle index of the array by taking the average of
              lowerLimit and upperLimit.
            </li>
            <li>
              If the value at the middle index is equal to the target value
              (findNum), return the middle index (middleIdx).
            </li>
            <li>
              If the value at the middle index is greater than the target value,
              set upperLimit to the middle index - 1 and repeat steps 3-5.
            </li>
            <li>
              If the value at the middle index is less than the target value,
              set lowerLimit to the middle index + 1 and repeat steps 3-5.
            </li>
            <li>
              If the target value is not found after the search interval becomes
              empty, return -1 to indicate that the value is not present in the
              array.
            </li>
            <li>Display the results of the function/algorithm.</li>
          </ol>
          <p className="mt-3">
            In summary, to compare the efficiency of linear and binary search
            algorithms, we can use Big O Notation. The time complexity of linear
            search is O(n), which means that the worst-case scenario requires
            searching through, every element in the list. The time complexity of
            binary search is O(log n), which means that the worst-case scenario
            requires dividing the list in half repeatedly until the target
            element is found. Therefore, in terms of efficiency, binary search
            is more efficient than linear search for large lists. However, for
            small lists, the difference in efficiency may not be significant.
          </p>
        </section>

        {/* Section Four: Fibonacci Sequence */}
        <section className="fibonacci-sequence">
          <h3 className="big-o-notation-blog-headings text-xl font-medium underline mt-8">
            What is the Fibonacci Sequence?
          </h3>
          <p className="mt-3">
            The Fibonacci sequence is a series of numbers in which each number
            is the sum of the two preceding numbers. The sequence starts with 0
            and 1, and the next number is always the sum of the previous two
            numbers. So the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and
            so on. It has many interesting properties and is found in many
            different areas of mathematics, science, and programming.
          </p>
          <h3 className="big-o-notation-blog-headings text-xl font-medium underline mt-8">
            How does a Recursive Function compare to a Non-recursive Function
            when used to determine the numbers of the Fibonacci Sequence?
          </h3>
          <p className="mt-3">
            Consider the JavaScript example presented below of a recursive
            function used to display the first five numbers of the Fibonacci
            sequence.
          </p>
          <div className="recursive-function-container w-100 mt-6 flex justify-center items-center">
            <img
              className="recursive-function"
              src="/static/fib-recursive-function.png"
              alt="example code of a Fibonacci Sequence Recursive Function"
            />
          </div>
          <p className="mt-6">
            This function (fibonacciRecursive) uses recursion to calculate the
            Fibonacci sequence. It has a time complexity of O(2^n), because for
            each value of n, it makes two recursive calls. This means that as n
            gets larger, the time it takes to calculate the nth Fibonacci number
            grows exponentially.
          </p>
          <p className="mt-3">
            In comparison, consider the JavaScript example presented below of a
            non-recursive function used to display the first five numbers of the
            Fibonacci sequence.
          </p>
          <div className="non-recursive-function-container w-100 mt-6 flex justify-center items-center">
            <img
              className="non-recursive-function"
              src="/static/fib-non-recursive-function.png"
              alt="example code of a Fibonacci Sequence Non-Recursive Function"
            />
          </div>
          <p className="mt-6">
            This function (fibonacciNonRecursive) uses a loop to calculate the
            Fibonacci sequence. It has a time complexity of O(n), because it
            only needs to iterate over the sequence once to calculate the nth
            Fibonacci number. This means that as n gets larger, the time it
            takes to calculate the nth Fibonacci number grows linearly.
          </p>
          <p className="mt-3 mb-8">
            In terms of efficiency, the non-recursive function is more efficient
            than the recursive function. The recursive function has an
            exponential time complexity, which means that it becomes very slow
            as n gets larger. On the other hand, the non-recursive function has
            a linear time complexity, which means that it is more efficient for
            larger values of n.
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
