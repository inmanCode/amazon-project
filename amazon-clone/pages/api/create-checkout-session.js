const stripe = require('stripe')(
  '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'
);

export default async (req, res) => {
  const { items, email } = req.body;
  console.log(items, email);
};
