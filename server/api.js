import express from 'express';
import mongoose from 'ongoose';
import passport from 'passport';
import gridController from './gridController';

const app = express();

mongoose.connect('mongodb://localhost/nexus-grid', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(passport.initialize());

app.get('/api/grid-layouts', gridController.getGridLayouts);
app.post('/api/grid-layouts', gridController.createGridLayout);
app.get('/api/grid-templates', gridController.getGridTemplates);
app.post('/api/grid-templates', gridController.createGridTemplate);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
