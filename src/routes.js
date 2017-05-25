import express from 'express';
import Poll from './config/model';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    response: 'GET for home route',
    body: req.body,
  });
});

router.get('/polls', (req, res) => {
  res.json({
    response: 'GET for all Polls',
    body: req.body,
  });
});

router.get('/:pID', (req, res) => {
  res.json({
    response: 'GET for one specific poll',
    poll: req.params.pID,
    body: req.body,
  });
});

router.post('/:pID/vote', (req, res) => {
  res.json({
    response: 'POST for voting on a poll',
    poll: req.params.pID,
    body: req.body,
  });
});

router.post('/new', (req, res) => {
  res.json({
    response: 'POST for home route /authReq',
    body: req.body,
  });
});

router.post('/:pID/new', (req, res) => {
  res.json({
    response: 'POST for creating a new option on a poll /authReq',
    poll: req.params.pID,
    body: req.body,
  });
});

router.delete('/:pID', (req, res) => {
  res.json({
    response: 'DELETE for deleting a poll /authReq',
    poll: req.params.pID,
    body: req.body,
  });
});

export default router;
