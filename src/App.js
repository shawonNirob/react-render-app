import React from 'react';

const App = () => {
    return (
        <div>
            <header>
                <h1>Welcome to My HTML Syntax Page</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="about">
                    <h2>About This Page</h2>
                    <p>This page serves as a demonstration of various HTML elements and their syntax.</p>
                </section>

                <section id="content">
                    <h2>Content Overview</h2>
                    <p>This section includes examples of different HTML tags:</p>

                    <h3>Lists</h3>
                    <h4>Unordered List</h4>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>

                    <h4>Ordered List</h4>
                    <ol>
                        <li>First Item</li>
                        <li>Second Item</li>
                        <li>Third Item</li>
                    </ol>

                    <h3>Images</h3>
                    <img src="image.jpg" alt="Example Image" />

                    <h3>Tables</h3>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Alice</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>Bob</td>
                                <td>25</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Forms</h3>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>

                    <h3>Buttons</h3>
                    <button onClick={() => alert('Button Clicked!')}>Click Me!</button>

                    <h3>Multimedia</h3>
                    <h4>Audio</h4>
                    <audio controls>
                        <source src="audio.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>

                    <h4>Video</h4>
                    <video width="320" height="240" controls>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <h3>Embedded Content</h3>
                    <iframe src="https://www.example.com" width="600" height="400" title="Example"></iframe>
                </section>
            </main>

            <footer>
                <p>© 2024 HTML Syntax Example</p>
            </footer>

            <script>
                console.log('This is an example of embedded JavaScript code.');
            </script>
        </div>
    );
};

export default App;