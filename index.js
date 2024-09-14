const express = require('express');
const app = express();
const path = require('path');
const data = require('./data.json'); 

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index' , {title: 'English presentation'} )
})

app.get('/contact-information', (req, res) => {
  res.render('contact-information', { contactInfo: data.contactInformation });
});

app.get('/professional-summary', (req, res) => {
  res.render('professional-summary', { summary: data.professionalSummary });
});

app.get('/work-experience', (req, res) => {
  res.render('work-experience', { workExperience: data.workExperience });
});

app.get('/education', (req, res) => {
  res.render('education', {education: data.education});
});

app.get('/skills', (req, res) => {
  res.render('skills', { skills: data.skills });
});

app.get('/languages', (req, res) => {
  res.render('languages', { languages: data.languages });
});

app.get('/finish', (req,res) => {
  res.render('finish', {finish: data.finish})
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
