import React from 'react';
import './other.css';
import icons from '../icons.json';
import '../icons.css';

const Other = () => {
  const selectedIcons1 = ['JavaScript', 'HTML', 'CSS', 'React'];
  const selectedIcons2 = ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'React'];
  const selectedIcons3 = ['Python', 'Jupyter', 'Anaconda'];
  const selectedIcons4 = ['Python'];
  const selectedIcons5 = ['Python'];
  const selectedIcons6 = ['Python', 'Gimp'];
  const selectedIcons7 = ['Java', 'Processing'];

  return (
    <div className='nba-container'>
      <div className='nba-content'>
        <h2 className='title-heading'>Other Work</h2>
        <h2 className='nba-heading'>david-clarke.com</h2>
        <div className='vr-icons-container'>
          {selectedIcons1.map((icon) => {
            const selectedIcon1 = icons.find((item) => item.name === icon);
            return selectedIcon1 ? (
              <i key={icon} className={`devicon ${selectedIcon1.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I built this website using JavaScript, HTML, CSS, and React, taking pride in crafting every element from scratch, including the ChatBot. The website showcases my skills in full-stack web development and features a ChatBot that adds interactivity and enhances the user experience. The ChatBot was developed using JavaScript and integrated with wit.ai, a natural language processing platform, to enable intelligent conversation handling. If you're interested in exploring the code and understanding the implementation details, you can find it on my GitHub repository.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Website-Development' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Music Genre Classifier</h2>
        <div className='vr-icons-container'>
          {selectedIcons2.map((icon) => {
            const selectedIcon2 = icons.find((item) => item.name === icon);
            return selectedIcon2 ? (
              <i key={icon} className={`devicon ${selectedIcon2.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I built the Music Genre Classifier, a machine learning project that accurately predicts the genre of music files based on their audio features. Throughout the development process, I utilized Python along with libraries such as Librosa, scikit-learn, and Django to handle audio processing, perform machine learning tasks, and create a user-friendly web application interface. By cloning the repository and installing the necessary dependencies, users can easily predict the genre of their music files by running the predict_genre.py script and providing the file path as an argument. The project also includes an ongoing web application that allows users to upload music files for genre classification. In the future, I plan to enhance the project by expanding the training dataset, experimenting with different features and algorithms, and implementing genre recommendations based on user preferences. The GTZAN Genre Collection serves as the data source for this project, providing a diverse collection of music tracks spanning various genres.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/music-genre-classifier' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>White Balancing</h2>
        <div className='vr-icons-container'>
          {selectedIcons3.map((icon) => {
            const selectedIcon3 = icons.find((item) => item.name === icon);
            return selectedIcon3 ? (
              <i key={icon} className={`devicon ${selectedIcon3.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I developed the White Balance Algorithms for Image Processing project, which incorporates two effective white balance algorithms: Grey World and Weng's algorithm. The Grey World algorithm operates by adjusting the color channels of an image to ensure that the average color appears as a shade of gray, while Weng's algorithm corrects color casts by identifying near-white pixels and appropriately adjusting their color channels. The codebase offers convenient functions to apply these algorithms to images, and it also includes examples showcasing their usage, image display capabilities, and the ability to save the balanced images. To utilize the project, it is necessary to install dependencies such as NumPy, Matplotlib, and scikit-image, which can be easily installed via the pip package manager.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Wengs-Algorithm-And-Grey-World-For-White-Balancing' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Systematic MIDI Extraction</h2>
        <div className='vr-icons-container'>
          {selectedIcons4.map((icon) => {
            const selectedIcon4 = icons.find((item) => item.name === icon);
            return selectedIcon4 ? (
              <i key={icon} className={`devicon ${selectedIcon4.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I created the Systematic MIDI Extraction for Ableton Live project, which aims to streamline the process of extracting MIDI files from multiple Ableton Live projects and converting audio files to MIDI. The project includes a Python script that seamlessly interacts with Ableton Live through the pylive library. By providing the project and output folders as input parameters, users can effortlessly extract MIDI files from each specified project and save them in the designated output directory. It is essential to have Python 3.7 or a higher version, Ableton Live installed on the system, and the pylive library included as a submodule in order to utilize this project effectively.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Systematic-MIDI-Extraction-Ableton' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Ableton Collect & Save</h2>
        <div className='vr-icons-container'>
          {selectedIcons5.map((icon) => {
            const selectedIcon5 = icons.find((item) => item.name === icon);
            return selectedIcon5 ? (
              <i key={icon} className={`devicon ${selectedIcon5.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I developed the Automate Ableton Collect and Save project, which offers a convenient Python script to automate the process of collecting and saving samples within Ableton Live projects. This ensures that users can seamlessly transfer their projects to other computers or storage devices without the risk of losing any samples. To utilize the project, users need to have Python 3.x installed, along with the pylive library as a dependency. After cloning the repository and installing the necessary dependencies, users can simply run the script within the project folder, specifying the master folder path. The script will automatically identify and save all the samples used in the project, ensuring they are appropriately stored within the project folder. The project acknowledges the pylive library for its crucial role in facilitating programmatic interaction with Ableton Live.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Automate-Ableton-Collect-And-Save' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Python GIMP Poster</h2>
        <div className='vr-icons-container'>
          {selectedIcons6.map((icon) => {
            const selectedIcon6 = icons.find((item) => item.name === icon);
            return selectedIcon6 ? (
              <i key={icon} className={`devicon ${selectedIcon6.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I developed the Python GIMP Poster project, which features a script that generates captivating posters using the GIMP image editor. The posters include randomly selected quotes paired with carefully chosen background images. To utilize the script, one must have GIMP installed, clone the repository, and install the necessary Python packages using "pip install -r requirements.txt". By executing the "python poster.py" command in the project directory, the script generates the poster, saving it in the "output/" folder. The project showcases design principles such as symmetrical balance, alignment, unity, and emphasis, employing techniques like layer transformations, color exchange, and text customization to achieve visually appealing designs. It offers a user-friendly solution for effortlessly creating visually striking posters through the power of Python and the GIMP image editor.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Python-GIMP-Poster' target='_blank'>Github Link</a></p>
        <h2 className='nba-heading'>Java Pronoun Use</h2>
        <div className='vr-icons-container'>
          {selectedIcons7.map((icon) => {
            const selectedIcon7 = icons.find((item) => item.name === icon);
            return selectedIcon7 ? (
              <i key={icon} className={`devicon ${selectedIcon7.link} vr-icon`} />
            ) : null;
          })}
        </div>
        <p className='nba-paragraph'>I built the Java-Pronoun-Use-Movies repository, which contains a Java application that leverages the Processing library to analyze the usage of personal pronouns in films. I developed a user interface that offers drop-down menus for selecting a movie and a character to analyze. To carry out the analysis, the application relies on CSV files that store movie data and character information. When the user selects a character, the application retrieves their lines from the CSV files. It then splits those lines into individual words and applies the RiTa.pos function to determine the parts of speech for each word. This allows us to identify personal pronouns within the character's dialogue. By counting the occurrences of personal pronouns in their lines, the application calculates the pronoun usage and presents the results visually on a pie chart. To use this application, you can start by cloning the repository onto your local machine. Next, set up the Processing library, ensuring it is properly configured. Import the necessary CSV files into the application, which contain the required movie data and character information. Finally, run the application and make your selections for the movie and character you wish to analyze using the provided drop-down menus. The application will generate a pie chart that displays the pronoun usage results based on your chosen character's lines.</p>
        <p className='nba-paragraph'><a className='other-link' href='https://github.com/DavidC6473/Java-Pronoun-Use-Movies' target='_blank'>Github Link</a></p>
        
      </div>
    </div>
  );
};

export default Other;