import mongoose from 'ongoose';

const GridLayout = mongoose.model('GridLayout', {
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GridItem' }],
});

const GridTemplate = mongoose.model('GridTemplate', {
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GridTemplateItem' }],
});

export default {
  getGridLayouts: async (req, res) => {
    const gridLayouts = await GridLayout.find().populate('items');
    res.json(gridLayouts);
  },

  createGridLayout: async (req, res) => {
    const gridLayout = new GridLayout(req.body);
    await gridLayout.save();
    res.json(gridLayout);
  },

  getGridTemplates: async (req, res) => {
    const gridTemplates = await GridTemplate.find().populate('items');
    res.json(gridTemplates);
  },

  createGridTemplate: async (req, res) => {
    const gridTemplate = new GridTemplate(req.body);
    await gridTemplate.save();
    res.json(gridTemplate);
  },
};
