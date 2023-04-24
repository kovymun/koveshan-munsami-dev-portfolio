/**DEVELOPER PORTFOLIO HASHING BLOG ARTICLE COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio Hashing Blog Article Component:
This component renders an article on the concept of hashing in JavaScript and Software Development in general.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Hashing() {
  return (
    <div className="hashing-page bg-charcoal-black flex justify-center items-center w-full h-auto text-white">
      <div className="hashing-contents-container w-11/12 mt-8">
        <h1 className="hashing-blog-title text-3xl underline">
          How JavaScript uses Hashing
        </h1>
        <p className="blog-post-date mt-2">Posted: 10 April 2023</p>

        {/* Section One: Introduction to Hashing */}
        <section className="hashing-intro">
          <h3 className="hashing-blog-headings text-xl font-medium underline mt-8">
            What is Hashing and what is it used for?
          </h3>
          <p className="mt-3">
            Hashing is the process of converting a given key or string of
            characters, using a mathematical algorithm, into another value. To
            generate this new value according to the mathematical algorithm, a
            hash function is used, where the result of the function is known as
            a hash value or simply, a hash.
          </p>
          <p className="mt-3">
            There are many important reasons for using hashing. These include
            data indexing, digital signatures, cybersecurity, and cryptography.
          </p>
          <p className="mt-3">
            In this article, we are going to discuss an application of hashing
            where it is used to securely store passwords in a database. Consider
            an example where a user creates an account on a new website with a
            trusted username and password. As the website administrator, you may
            need to store this user's password in a database, so that you know
            whether they have entered a valid password, every time they login to
            their account.
          </p>
          <p className="mt-3 mb-2">
            The administrator has three alternatives to store this password in a
            database:
          </p>
          <ol className="list-decimal ml-8">
            <li>Store the password in a plain text format.</li>
            <li>
              Store encrypted password using an encryption and decryption key.
            </li>
            <li>Store the password in a hash value.</li>
          </ol>
          <p className="mt-3">
            The aim of the website/database administrator is to ensure that the
            user's password is stored in the database securely. If the password
            is stored in plain text format, it is considered to be the most
            unsafe option, as any hack or data server breach will expose all
            user account credentials with little to no effort. As a second
            option, encrypted passwords can be stored in the database. However,
            that would mean they also have to store the decryption key somewhere
            on their servers. In the event of a hack or data server breach, both
            the decryption key and encrypted passwords will be exposed thus
            making it a single point of failure. These methods are insecure and
            expose the users account credentials to hackers and criminals. This
            is where the concept of hashing comes in. Using a hashing function,
            the user's password is “scrambled”, and the generated hash value is
            stored in the database. This provides a secure way to store a user's
            password in the database without the need for decryption.
          </p>
          <p className="mt-3">
            See the code below for an example of how a value can be hashed in
            JavaScript using the crypto module:
          </p>
          <div className="hashing-example-container w-100 mt-3 flex justify-center items-center">
            <img
              className="hashing-example"
              src="/static/hashing-example.png"
              alt="example code of hashing in JavaScript"
            />
          </div>
        </section>

        {/* Section Two: Hash Tables */}
        <section className="hashing-tables">
          <h3 className="hashing-blog-headings text-xl font-medium underline mt-3">
            What is a Hash Table?
          </h3>
          <p className="mt-3">
            A hash table is a data structure that is used for fast and efficient
            storage and retrieval of data. It is essentially an array that is
            indexed by a hash function, which converts a key value into an index
            in the array.
          </p>
          <h3 className="hashing-blog-headings text-xl font-medium underline mt-5">
            What are the benefits of using a Hash Table?
          </h3>
          <p className="mt-3 mb-2">
            The benefits of using a hash table include:
          </p>
          <ol className="list-decimal ml-8">
            <li>
              Fast access time: The key is mapped to an index in constant time,
              making retrieval of data very fast.
            </li>
            <li>
              Constant-time insertion and deletion: The hash function allows for
              constant-time insertion and deletion of data.
            </li>
            <li>
              Memory efficient: A hash table uses an array of fixed size, which
              makes it more memory-efficient than other data structures that
              require dynamic allocation.
            </li>
            <li>
              Flexibility: Hash tables can be used to implement a variety of
              data structures, such as maps, sets, and caches.
            </li>
            <li>
              Collision resolution: Hash tables can handle collisions, where
              multiple keys map to the same index, through various collision
              resolution techniques, such as chaining or open addressing.
            </li>
          </ol>
        </section>

        {/* Section Three: Difference between Hashing and Encryption */}
        <section className="hashing-vs-encryption">
          <h3 className="hashing-blog-headings text-xl font-medium underline mt-5">
            What is the difference between Hashing and Encryption?
          </h3>
          <p className="mt-3">
            Hashing and encryption are two different cryptographic techniques
            used to protect the confidentiality and integrity of information,
            but they have different purposes and functions.
          </p>
          <p className="mt-3">
            Hashing is a one-way process that converts any given input (key or
            string data) into a unique fixed-length output (hash value). The
            hash function is designed to be fast and deterministic, meaning that
            given the same input, it will always produce the same output.
            Hashing is commonly used for data verification and password storage.
            When a user enters their password, the system hashes the password
            and compares the resulting hash value with the stored hash value. If
            they match, the user is granted access. Since the hash function is
            one-way, it is difficult, if not impossible, to retrieve the
            original input from the hash value, making it ideal for protecting
            sensitive information.
          </p>
          <p className="mt-3">
            Encryption, on the other hand, is a reversible process that
            transforms plain text (original data) into cipher text (encrypted
            data) using an encryption algorithm and a secret key. The purpose of
            encryption is to protect the confidentiality of the data and prevent
            unauthorized access. The encrypted data can be decrypted back to its
            original form only if the receiver has the secret key. Encryption is
            commonly used to secure sensitive data such as credit card numbers,
            bank account details, and personal information during transmission
            over the internet.
          </p>
          <p className="mt-3">
            In summary, hashing is a one-way process used to verify data and
            store passwords, while encryption is a reversible process used to
            protect the confidentiality of information during transmission and
            storage.
          </p>
        </section>

        {/* Section Four: JavaScript Maps and Objects and the application of hashing */}
        <section className="js-maps-objects">
          <h3 className="hashing-blog-headings text-xl font-medium underline mt-5">
            What is a Map Object in JavaScript and how is it used?
          </h3>
          <p className="mt-3">
            In JavaScript, a Map object is a collection of key-value pairs where
            the keys and values can be of any type, including objects, arrays,
            and primitives. It provides a powerful tool for storing and
            accessing data in JavaScript. With their support for any type of key
            and their efficient implementation using hash tables, they are
            well-suited for a wide range of applications, including caching and
            data modelling.
          </p>
          <h3 className="hashing-blog-headings text-xl font-medium underline mt-5">
            What are the differences between JavaScript Maps and Objects?
          </h3>
          <p className="mt-3">
            Maps are similar to JavaScript objects, but with a few key
            differences.
          </p>
          <p className="mt-3">
            One major difference between objects and maps is that maps are
            designed to be more flexible in terms of the types of keys that can
            be used. While object keys are limited to strings and symbols, map
            keys can be any value, including objects and functions. This makes
            maps a more versatile tool for storing and accessing data.
          </p>
          <p className="mt-3">
            Another key difference between objects and maps is that maps are
            implemented using hash tables, while objects are typically
            implemented as arrays. As discussed earlier, Hash tables are a data
            structure that uses a hash function to map keys to indices in an
            array. This allows for fast lookup times, even for large collections
            of data.
          </p>
          <p className="mt-3 mb-8">
            The use of hashing for maps allows for efficient lookup and
            insertion of key-value pairs. When a new key-value pair is added to
            a map, the key is hashed using the map's internal hash function to
            determine its index in the underlying array. This index is then used
            to store the value in the array. When a value is looked up by key,
            the hash function is used again to find the index of the value in
            the array.
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
