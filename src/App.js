import "./App.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import SchoolIcon from "@mui/icons-material/School";
import TaskIcon from "@mui/icons-material/Task";
import AbcIcon from "@mui/icons-material/Abc";
import ContactsIcon from "@mui/icons-material/Contacts";
import ArticleIcon from "@mui/icons-material/Article";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

import GitHubIcon from "@mui/icons-material/GitHub";
import TouchAppIcon from "@mui/icons-material/TouchApp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={1} sm={2}>
          <Item>
            <Avatar
              alt="Sushanta Senapati"
              src="/images/avatar.png"
              sx={{ width: "70%", height: "70%" }}
              style={{ margin: "auto" }}
            />
          </Item>
          <Item className="itemStyle">
            <a>
              <InfoIcon />
              <span>About</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a>
            <ShowChartSharpIcon />
            <span>Experience</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a>
            <SchoolIcon />
            <span>Education</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a>
            <TaskIcon />
            <span>Projects</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a>
            <AbcIcon />
            <span>Skills</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a>
            <ContactsIcon />
            <span>Contact</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a>
            <ArticleIcon />
            <span>Resume</span>
            </a>
          </Item>
        </Grid>
        <Grid item xs={11} sm={10} className="grid2">
          {/* <Item></Item> */}
          <Item id="about">
            <h1>About</h1>
            <p>
              I am Sushanta Senapati, currently a final year student at National
              Institute of Technology, Rourkela, pursuing my undergraduate
              degree in Computer Science and Engineering. I am passionate about
              problem-solving and coding and web development. Currently I am
              learning about Machine Learning.I have worked in technologies like
              ReactJs, NodeJs, MongoDB, ExpreessJs, Python, C++. etc.
            </p>
            <p>
              <b>Languages: </b>C, C++, Pyhton, JavaScript
            </p>
            <p>
              <b>Databases: </b>MySql, MongoDB
            </p>
            <p>
              <b>Technologies: </b>Git, JIRA
            </p>
          </Item>
          <Item id="experience">
            <h1>Experience</h1>
            <Card
              sx={{ minWidth: 275 }}
              style={{ backgroundColor: "lightgreen" }}
            >
              <CardContent>
                <Typography>
                  <img
                    src="/images/oracle.png"
                    alt="Oracle Logo"
                    style={{ width: "18%" }}
                  />
                </Typography>
                <Typography>
                  <h2>Server Technology Intern</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </Typography>
                <Typography style={{ display: "flex", padding: "20px" }}>
                  <p style={{ paddingRight: "10px" }}>May'2022 - Jul'2022</p>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <p style={{ paddingLeft: "10px" }}>Bengaluru, India</p>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "hotpink" }}>
              <CardContent>
                <Typography>
                  <img
                    src="/images/Applib.png"
                    alt="Oracle Logo"
                    style={{ width: "18%" }}
                  />
                </Typography>
                <Typography>
                  <h2>Project Intern</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </Typography>
                <Typography style={{ display: "flex", padding: "20px" }}>
                  <p style={{ paddingRight: "10px" }}>Jan'2022 - May'2022</p>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <p style={{ paddingLeft: "10px" }}>Bengaluru, India</p>
                </Typography>
              </CardContent>
            </Card>
          </Item>
          <Item id="projects">
            <h1>Projects</h1>
            <div style={{ display: "flex" }}>
              <Card sx={{ width: "31%", margin: "1%" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="/images/coding.gif"
                  alt="Webdev"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    e-Commerce
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A shopping app for Android to make your shopping easy.
                  </Typography>
                </CardContent>
                <CardActions>
                  <GitHubIcon />
                  <TouchAppIcon />
                </CardActions>
              </Card>
              <Card sx={{ width: "31%", margin: "1%" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="/images/weather.gif"
                  alt="Webdev"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Weather App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A weather prediction app for a week of any location.
                  </Typography>
                </CardContent>
                <CardActions>
                  <GitHubIcon />
                  <TouchAppIcon />
                </CardActions>
              </Card>
              <Card sx={{ width: "31%", margin: "1%" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image="/images/reading.gif"
                  alt="Webdev"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Blog App
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A blog app where you can read and create your own blogs
                  </Typography>
                </CardContent>
                <CardActions>
                  <GitHubIcon />
                  <TouchAppIcon />
                </CardActions>
              </Card>
            </div>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
