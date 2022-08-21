import { useState, useMemo, useRef, useEffect } from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import InfoIcon from "@mui/icons-material/Info";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import SchoolIcon from "@mui/icons-material/School";
import TaskIcon from "@mui/icons-material/Task";
import AbcIcon from "@mui/icons-material/Abc";
import ContactsIcon from "@mui/icons-material/Contacts";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

import GitHubIcon from "@mui/icons-material/GitHub";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  const isInViewport4 = useIsInViewport(ref4);
  const isInViewport5 = useIsInViewport(ref5);
  const isInViewport6 = useIsInViewport(ref6);
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item xs={2} sm={2} md={2} className="sidebar">
          <Item>
            <Avatar
              alt="Sushanta Senapati"
              src="/images/avatar.png"
              sx={{ width: "70%", height: "70%" }}
              style={{ margin: "auto" }}
            />
          </Item>
          <Item className="itemStyle">
            <a href="#about" className={isInViewport1 ? "active" : ""}>
              <InfoIcon />
              <span>About</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a href="#experience" className={isInViewport2 ? "active" : ""}>
              <ShowChartSharpIcon />
              <span>Experience</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a href="#projects" className={isInViewport3 ? "active" : ""}>
              <TaskIcon />
              <span>Projects</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a href="#education" className={isInViewport4 ? "active" : ""}>
              <SchoolIcon />
              <span>Education</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a href="#skills" className={isInViewport5 ? "active" : ""}>
              <AbcIcon />
              <span>Skills</span>
            </a>
          </Item>
          <Item className="itemStyle">
            <a href="#contact" className={isInViewport6 ? "active" : ""}>
              <ContactsIcon />
              <span>Contact</span>
            </a>
          </Item>
        </Grid>
        <Grid item xs={10} className="grid2">
          <h1>About</h1>
          <Item ref={ref1} id="about">
            <p>
              I am Sushanta Senapati, currently a final year student at National
              Institute of Technology, Rourkela, pursuing my undergraduate
              degree in Computer Science and Engineering. I am passionate about
              problem-solving and coding and web development. Currently I am
              learning about Machine Learning.I have worked in technologies like
              ReactJs, NodeJs, MongoDB, ExpreessJs, Python, C++. etc.
            </p>
            <Button
              variant="contained"
              href="/Sushanta Senapati Resume.pdf"
              download
              style={{ margin: "auto" }}
            >
              Download CV
            </Button>
          </Item>
          <h1>Experience</h1>
          <Item ref={ref2} id="experience">
            <Card
              sx={{ width: "100%" }}
              style={{ backgroundColor: "lightgreen" }}
              className="exp-card"
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
                    Worked with Site Reliable Engineers of Block Storage Team of
                    Oracle in developing the BOSS Client script
                  </p>
                  <p>
                    It will automate the works of BOSS UI, hence reducing the
                    effort to do works manually for block storage works like
                    managing block volumes, boot volumes, backups, tenant
                    utilizations. etc
                  </p>
                </Typography>
                <Typography style={{ display: "flex", padding: "20px" }}>
                  <p style={{ paddingRight: "10px" }}>May'2022 - Jul'2022</p>
                  <Divider orientation="vertical" variant="middle" flexItem />
                  <p style={{ paddingLeft: "10px" }}>Bengaluru, India</p>
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{ width: "100%" }}
              style={{ backgroundColor: "lightgreen" }}
              className="exp-card"
            >
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
                    Worked on open source library Development using extended
                    typescript on Rounded Image View for android
                  </p>
                  <p>
                    Can use the library for making images to different shapes
                    especially rounded.
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
          <h1>Projects</h1>
          <Item
            ref={ref3}
            id="projects"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Card className="project-card" >
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
                <a href="https://github.com/sushanta1307/e-commerce">
                  <GitHubIcon />
                </a>
                <a href="#">
                  <TouchAppIcon />
                </a>
              </CardActions>
            </Card>
            <Card className="project-card" >
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
                <a href="https://github.com/sushanta1307/weather-app">
                  <GitHubIcon />
                </a>
                <a href="#">
                  <TouchAppIcon />
                </a>
              </CardActions>
            </Card>
            <Card className="project-card" >
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
                <a href="https://github.com/sushanta1307/blogapp">
                  <GitHubIcon />
                </a>
                <a href="#">
                  <TouchAppIcon />
                </a>
              </CardActions>
            </Card>
          </Item>
          <h1>Education</h1>
          <Item
            id="education"
            ref={ref4}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Card className="edn">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Jawahar Navoday Vidyalaya, Dhenkanal
                  <br />
                  Odisha 2017-2019
                  <Divider />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ul>
                    <li>
                      <b>Stream: </b>Science
                    </li>
                    <li>
                      <b>Percentage: </b>96.8%
                    </li>
                  </ul>
                  <ul>
                    <p className="courses">
                      <b>Relevant Courseworks:</b>
                      <ul>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Mathematics</li>
                        <li>Biology</li>
                        <li>English</li>
                      </ul>
                    </p>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
            <Card className="edn">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  National Institute of Technology, Rourkela
                  <br />
                  Odisha 2019-2023
                  <Divider />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <ul>
                    <li>
                      <b>Stream: </b>Computer Science and Engineering
                    </li>
                    <li>
                      <b>CGPA: </b>9.34
                    </li>
                  </ul>
                  <ul>
                    <p className="courses">
                      <b>Relevant Courseworks:</b>
                      <ul>
                        <li>Data Structures and Algorithms</li>
                        <li>Cloud Computing</li>
                        <li>Computer Networks</li>
                        <li>Operating System</li>
                        <li>Database Engineering</li>
                      </ul>
                    </p>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Item>
          <h1>Skills</h1>
          <Item id="skills" ref={ref5}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Languages and Databases
                  <Divider />
                </Typography>
                <div
                  className="logo"
                  style={{
                    diaplay: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <img src="/images/python.jpg" alt="Python" />
                  <img src="/images/mysql.jpg" alt="Mysql" />
                  <img src="/images/cpp.png" alt="C++" />
                  <img src="/images/mongodb.png" alt="MongoDB" />
                </div>
              </CardContent>
            </Card>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Softwares
                  <Divider />
                </Typography>
                <div
                  className="logo"
                  style={{
                    diaplay: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <img src="/images/git.png" alt="Git" />
                  <img src="/images/matlab.png" alt="Matlab" />
                  <img src="/images/vscode.png" alt="VS Code" />
                </div>
              </CardContent>
            </Card>
          </Item>
          <h1>Contact</h1>
          <Item id="contact" ref={ref6}>
            <a
              href="mailto:1307senapati@gmail.com"
              target="_blank"
            >
              <EmailIcon fontSize="large"/>
            </a>
            <a
              href="https://www.linkedin.com/in/sushanta-senapati-b089801b4/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large"/>
            </a>
            <a
              href="https://www.instagram.com/_sushanta.senapati_/"
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://github.com/sushanta1307/" 
              target="_blank">
              <GitHubIcon fontSize="large"/>
            </a>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
