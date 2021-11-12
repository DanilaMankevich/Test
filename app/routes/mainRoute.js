const express = require('express')
const router = express.Router()
const Competition = require('../models/competition')
const Match = require('../models/match')
const Season = require('../models/season')
const config = require('../config/db')
const mongoose = require("mongoose");

router.post('/competition', (req, res) => {
    let newCompetition = new Competition({
        name: req.body.competitionName
        
    });
    Competition.addCompetitionToMongo(newCompetition,(err, competition)=>{
        if(err)
            res.json({success: false, msg: 'err' + err})
        else
            res.json({success:true, msg: 'Competition added'})
    })
});

router.post('/match', (req, res) => {
    let newMatch = new Match({ ...req.body})
    //     homeTeamName: req.body.homeTeamName,
    //     awayTeamName: req.body.awayTeamName,
    //     date: req.body.date,
    //     scoreAwayTeam: req.body.scoreAwayTeam,
    //     scoreHomeTeam: req.body.scoreHomeTeam,
    //     competitionId: req.body.competitionId,
    //     seasonId: req.body.seasonId
    // })


    Match.addMatch(newMatch,(err, match)=>{
        if(err)
            res.json({success: false, msg: 'err' + err})
        else
            res.json({success:true, msg: 'Match added'})
    })
});

router.post('/season', (req, res) => {
    let newSeason = new Season({
        name: req.body.seasonName
    });
    Season.addSeason(newSeason,(err, season)=>{
        if(err)
            res.json({success: false, msg: 'err' + err})
        else
            res.json({success:true, msg: 'Season added'})
    })
});
//competitions
router.get('/competitions',(req,res)=>{
    Competition.find({}).exec((err, competitions)=>{
        if(err){
            console.log(err+ "error retrieving competitions")
        } else {
            res.json(competitions)
        }
    })
})

router.get('/competitions/:id',(req,res)=>{
    Competition.findById(req.params.id).exec((err, competition)=>{
        if(err){
            console.log(err+ "error retrieving competition")
        } else {
            res.json(competition)
        }
    })
})

//seasons

router.get('/seasons',(req,res)=>{
    Season.find({}).exec((err, seasons)=>{
        if(err){
            console.log(err+ "error retrieving seasons")
        } else {
            res.json(seasons)
        }
    })
})

router.get('/seasons/:id',(req,res)=>{
    Season.findById(req.params.id).exec((err, season)=>{
        if(err){
            console.log(err+ "error retrieving season")
        } else {
            res.json(season)
        }
    })
})

//matches

router.get('/matches',(req,res)=>{
    Match.find({}).exec((err, matches)=>{
        if(err){
            console.log(err+ "error retrieving matches")
        } else {
            
            res.json(matches.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
        }
    })
})

router.get('/matches/:id',(req,res)=>{
    Match.findById(req.params.id).exec((err, match)=>{
        if(err){
            console.log(err+ "error retrieving match")
        } else {
            res.json(match)
        }
    })
})

router.get('/search', async (req, res)=>{
    let a = req.query.competitionId
    let b = req.query.seasonId
    
  
    
  
    await Match.find({competitionId: a, seasonId:b}).exec((err, matches)=>{
      if(err){
          console.log(err+ "error retrieving competition")
      } else {
          res.send(matches)
      }
  })
  
})


module.exports = router