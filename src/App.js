import ProfilePix from './img/profile__img.png';
import SlackPix from './img/slack.png';
import GithubPix from './img/github.png';
import ZuriPix from './img/zuri.png';
import I4GPix from './img/I4G.png';

export default function App() {
  return (
    <>
      <main>
        <img id="profile_img" src={ProfilePix} alt="profile" />
        <h2 id='profile_text'>Annette Black</h2>

        <p id="twitter">Twitter Link</p>
        <p id="slack">ArinzeCyril</p>
        <a href="https://training.zuri.team/" id="btn_zuri">Zuri Team</a>
        <a href="http://books.zuri.team" id="books">Zuri Books <sub>This is where you will find books on design and coding</sub></a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=ArinzeCyril" id="book_python">Python Books <sub>Do you wish to learn Python? this is the best place to start</sub></a>
        <a href="https://background.zuri.team" id="pitch">Backgroung Check for Coders <sub>Let us run a background check on your coders</sub></a>
        <a href="https://books.zuri.team/design-rules" id="book__design">Design Books <sub>Are you passionate about design but dont know where to start? Here's a free design ebook offered by Zuri</sub></a>
        <div id='SM'>
          <img src={SlackPix} alt="slack" />
          <img src={GithubPix} alt="github" />
        </div>
      </main>

      <footer>
        <img id='zuripix' src={ZuriPix} alt="Zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img id='i4gpix' src={I4GPix} alt="I4g" />
      </footer>
    </>
  )
}