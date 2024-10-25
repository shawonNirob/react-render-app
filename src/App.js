import React from 'react';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div className="container">
            <header>
                <h1 className="title">Hello World</h1>
                <nav>
                    <ul className="nav-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#content">Content</a></li>
                    </ul>
                </nav>
            </header>

            <main className="main">
                <section id="about">
                    <h2 className="section-title">About This Page</h2>
                    <p className="section-description">This page serves as a demonstration of various HTML elements and their syntax.</p>
                </section>

                <section id="content">
                    <h2 className="section-title">Content Overview</h2>
                    
                    <div className="overflow-example">
                        <h3>Overflow Example</h3>
                        <p>This paragraph is long enough to overflow its container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </section>

                <section id="content">
                    <h2 className="section-title">Content Overview</h2>
                    <p>This section includes examples of different HTML tags:</p>

                    <h3>Lists</h3>
                    <h4>Unordered List</h4>
                    <ul className="unordered-list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>

                    <h4>Ordered List</h4>
                    <ol className="ordered-list">
                        <li>First Item</li>
                        <li>Second Item</li>
                        <li>Third Item</li>
                    </ol>

                    <h3>Images</h3>
                    <img src="image.jpg" alt="Example Image" className="image-example" />

                    <h3>Tables</h3>
                    <table className="styled-table">
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
                    <form className="form-example">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" className="text-input" />
                        <br />
                        <input type="submit" value="Submit" className="submit-button" />
                    </form>

                    <h3>Buttons</h3>
                    <button onClick={() => alert('Button Clicked!')} className="click-button">Click Me!</button>

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
        </div>
    );
};

export default App;