import React from 'react';
import './other.css';

const Other = () => {
  return (
    <div className='nba-container'>
      <div className='nba-content'>
        <h2 className='title-heading'>Other Work</h2>
        <h2 className='nba-heading'>david-clarke.com</h2>
        <p className='nba-paragraph'>
I built this website using JavaScript, HTML, CSS, and React, taking pride in crafting every element from scratch, including the ChatBot. The website showcases my skills in full-stack web development and features a ChatBot that adds interactivity and enhances the user experience. The ChatBot was developed using JavaScript and integrated with wit.ai, a natural language processing platform, to enable intelligent conversation handling. If you're interested in exploring the code and understanding the implementation details, you can find it on my GitHub repository.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Website-Development' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Music Genre Classifier</h2>
        <p className='nba-paragraph'>The Music Genre Classifier is a machine learning project that predicts the genre of music files based on their audio features. It uses Python, Librosa, scikit-learn, and Django to process audio, perform machine learning tasks, and build a web application interface. Users can clone the repository, install dependencies, and predict the genre of music files by running the predict_genre.py script with the file path as an argument. The project also includes a web application in progress, which will allow users to upload files for genre classification. Future improvements may involve expanding the training dataset, experimenting with different features and algorithms, and implementing genre recommendations based on user preferences. The project uses the GTZAN Genre Collection as the data source, offering a diverse collection of music tracks spanning various genres.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/music-genre-classifier' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>White Balancing</h2>
        <p className='nba-paragraph'>The White Balance Algorithms for Image Processing project implements two white balance algorithms: Grey World and Weng's algorithm. The Grey World algorithm adjusts color channels to make the average color of an image appear as a shade of gray, while Weng's algorithm corrects color casts by identifying near-white pixels and adjusting their color channels. The code provides functions to apply these algorithms to images and includes examples for usage, image display, and saving the balanced images. The project requires dependencies such as NumPy, Matplotlib, and scikit-image, which can be installed via pip.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Wengs-Algorithm-And-Grey-World-For-White-Balancing' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Systematic MIDI Extraction</h2>
        <p className='nba-paragraph'>The Systematic MIDI Extraction for Ableton Live project automates the extraction of MIDI files from multiple Ableton Live projects and the conversion of audio files to MIDI. It provides a Python script that interacts with Ableton Live using the pylive library. By specifying the project and output folders, the script extracts MIDI files from each project and saves them in the designated output directory. The project requires Python 3.7 or higher, Ableton Live installed on the system, and the pylive library as a submodule.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Systematic-MIDI-Extraction-Ableton' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Ableton Collect & Save</h2>
        <p className='nba-paragraph'>The Automate Ableton Collect and Save project provides a Python script that automates the process of collecting and saving samples in Ableton Live projects. By running the script, users can easily move their Ableton Live projects to another computer or storage device without losing any samples. The project requires Python 3.x and the pylive library as dependencies. After cloning the repository and installing the required dependencies, users can run the script in the project folder, specifying the master folder path. The script will automatically collect and save all samples used in the project, ensuring they are stored within the project folder. The project credits the pylive library for enabling programmatically interaction with Ableton Live.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Automate-Ableton-Collect-And-Save' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Python GIMP Poster</h2>
        <p className='nba-paragraph'>The Python GIMP Poster project is a script that generates a poster using the GIMP image editor. The poster includes a random quote and a background image. To use the script, you need to install GIMP on your computer and clone the repository. Additionally, install the required Python packages by running pip install -r requirements.txt. Once set up, navigate to the project directory in the terminal and execute python poster.py to generate the poster, which will be saved in the output/ directory. The project incorporates design principles such as symmetrical balance, alignment, unity, and emphasis. Various techniques are used, including layer transformations, color exchange, and text customization, to achieve the desired visual elements in the poster design.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Python-GIMP-Poster' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Java Pronoun Use</h2>
        <p className='nba-paragraph'>The Java-Pronoun-Use-Movies repository contains a Java application that utilizes the Processing library to analyze the usage of personal pronouns in films. The application provides a user interface with drop-down menus to select a movie and a character for analysis. It uses CSV files containing movie data and character information to perform the analysis. The application retrieves the character's lines, splits them into words, and applies the RiTa.pos function to determine the parts of speech. By counting the personal pronouns in the selected character's lines, it calculates the pronoun usage and displays the results on a pie chart. To use the application, clone the repository, set up the Processing library, import the necessary CSV files, and run the application, selecting a movie and character for analysis using the provided drop-down menus. The pronoun usage results will be displayed on the pie chart.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Java-Pronoun-Use-Movies' target='_blank'>Github Link</a></p>
        
      </div>
    </div>
  );
};

export default Other;