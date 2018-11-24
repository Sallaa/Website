import React from "react"

export default () => (
    <div class="ui centered grid container projects">
        <div class="row">
            <div class="ui center aligned raised segment">
                <h2>Work</h2>

                <div class="ui divider"></div>
                <table class="ui striped very basic table">
                    <tbody>
                        <tr>
                            <td>
                                <h4><a class="ui teal label">Current</a> Visiting Student Researcher</h4>
                                <p>KAIST Information-Based Design Research Group, Daejeon South Korea</p>
                            </td>
                            <td>
                                <ol class="ui justified list">
                                    <li value="–">System design for recommendation system in smart-home environment.</li>
                                    <li value="–">Providing the smart personal assistant that supports users use smart
                                        home
                                        environment more easily.
                                    </li>
                                    <li value="–">Space modeling for indoor environment with spatial features in the
                                        level of
                                        furniture and implement the spatial similarity measurement and maximization for
                                        dissimilar remote spaces.
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>
                                    Intern – Architecture & Interfaces for Data Visualization
                                </h4>
                                <p>Dassault Systèmes, Vélizy-Villacoublay, France
                                </p>
                                <p>August, 1st, 2017 - February, 1st, 2018</p>
                            </td>
                            <td>
                                <ol class="ui justified list">
                                    <li value="–">Audit of a J2E web application (JSP, Tomcat, Oracle) for customer
                                        monitoring
                                        of
                                        batch executions.
                                    </li>
                                    <li value="–">Restructuration of the web application: moved from JSP pages only to
                                        a
                                        model-view-controller architecture with servlets, as preconized by Oracle.
                                    </li>
                                    <li value="–">Specifications for new Web Interfaces, horizontal prototyping, choice
                                        of
                                        open-source JavaScript libraries for Data Visualization. (D3.js and C3.js).
                                    </li>
                                    <li value="–">Development of Web Interfaces from scratch: new architecture to host
                                        the
                                        interfaces and to increase future development velocity. Designed performant SQL
                                        requests
                                        to
                                        access the data.
                                    </li>
                                    <li value="–">Redaction and development of new interfaces for the documentation for
                                        the
                                        end-users.
                                    </li>
                                    <li value="–">Redaction of technical documentation and tutorials to create new
                                        interfaces.
                                    </li>
                                </ol>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        <div class="row">
            <div class="ui center aligned raised segment">
                <h2>Publications</h2>
                <div class="ui divider"></div>
                <table class="ui striped very basic table">
                    <tbody>
                        <tr>
                            <td>
                                <h4>Generating Graphical Representations to Allocate Collision-free Motion-paths for
                                    Tele-presence Avatars</h4>
                                <p>CAADRIA 2019 (in preparation)</p>
                            </td>
                            <td>
                                A method of representing indoors by graphs which is defined by a
                                graph-similarity-measure using
                                scene-level similarity that includes Topology, Metric-distance, Directional,
                                Distribution and
                                (non-spatial) Attribute distances. These graphs provide potential solution for
                                performing
                                scene-level comparison to derive collision-free paths for the Avatars.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>
                                    Framework of judgment system for Smart Home Assistant utilizing Collective
                                    Intelligence
                                    Case-Based Reasoning
                                </h4>
                                <p>CAADRIA 2019 (in preparation)</p>
                            </td>
                            <td>
                                <p>A framework of service recommendation system designed for Smart Home utilizing a
                                    multi-agent
                                    approach coupled with Case-Based Reasoning.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>
                                    User experience and guidelines for the Smart-Mirrors
                                </h4>
                                <p>Electronic Markets Journal (in preparation)</p>
                            </td>
                            <td>
                                <p>Evaluation of the current state of Smart-Mirrors to provide a novel model for best
                                    practices
                                    and design.
                                </p>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        <div class="row">
            <div class="ui center aligned raised segment">
                <h2>Personal Projects</h2>
                <div class="ui divider"></div>
                <table class="ui striped very basic table">
                    <tbody>
                        <tr>
                            <td>
                                <h4>Neural networks for OCR</h4>
                                <p>University of Technology of Troyes, France</p>
                                <p>Spring semester 2018</p>
                            </td>
                            <td>
                                A personal choice study to have a first look at the neural networks to understand how
                                they
                                work. I used Python, Keras (Backend Tensorflow) with MNIST and EMNIST datasets, and
                                OpenCV.
                                Overseen by a research
                                professor, I trained a Convolutional Neural Network to identify handwritten characters
                                and
                                words.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>
                                    HCI: How to improve the planes' economic class for the customers?
                                </h4>
                                <p>KAIST, Daejeon South Korea</p>
                                <p>Spring semester 2017</p>
                            </td>
                            <td>
                                <p>Design Thinking, User study, Interviews & Observations, Prototyping, Evaluation</p>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
)