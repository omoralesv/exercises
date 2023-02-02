import React, { useEffect } from 'react'
import { Typography,Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const extradetail = [
    {
      icon:BodyPartImage,
      name: bodyPart
    },
    {
      icon:TargetImage,
      name: target
    },
    {
      icon:EquipmentImage,
      name: equipment
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [name])

  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{gap:{lg:'35px', xs:'20px'}}}>
        <Typography variant='h3' textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant='h6'>
          Exercises keep you strong. <span style={{textTransform:'capitalize'}}>{name} {` `} </span>is one of the best exercises
          to target your {target}. It will help you improve your mood and gain energy.
        </Typography>

        {
          bodyPart === 'back' && 
          <Typography variant='h6'>
            Exercising your back is very important.It’s important not to overlook the fact that back muscles are actually 
            some of the largest muscles in the human body. When back muscles become weak or atrophied, this influences other 
            parts of the body. This is why it is very beneficial to keep these muscles strong. 
          </Typography>
        }
        {
          bodyPart === 'cardio' && 
          <Typography variant='h6'>
            No matter your age, weight or athletic ability, aerobic activity is good for you. Aerobic activity has many health 
            benefits. As your body adapts to regular aerobic exercise, you'll get stronger and fitter.
          </Typography>
        }
        {
          bodyPart === 'chest' && 
          <Typography variant='h6'>
            As one of the largest muscles in your upper body, the pecs play a major role in maintaining good posture. 
            In addition to your back and shoulder muscles, your pecs help to stabilize the shoulder joint. 
            In addition to improving your posture, strengthening and lengthening chest muscles helps to support deeper breathing. 
            That’s because the pecs are attached to your ribs, which expand with every breath.
          </Typography>
        }
        {
          bodyPart === 'lower arms' && 
          <Typography variant='h6'>
            Strengthening your forearms also increases grip strength, which is related to upper body strength.
             A strong grip helps you carry, hold, and lift items in your everyday life and during athletic activity. Plus, you'll 
             have more power when you work out, which will bring more strength to your entire body.
          </Typography>
        }
        {
          bodyPart === 'neck' && 
          <Typography variant='h6'>
            Training the muscles of the neck is often neglected. Let’s not forget our neck is located between the brain and the 
            rest of the body. This is one of the most important junctions of our bodies, so it’s a must that we train it.
          </Typography>
        }
        {
          bodyPart === 'shoulder' && 
          <Typography variant='h6'>
            Shoulder or scapular strength exercises can promote healthy movement patterns and improve posture and muscle function. 
            Doing these exercises on a regular basis can help to treat and prevent injuries and allow you to move with greater 
            ease and strength.
          </Typography>
        }
        {
          bodyPart === 'upper arms' && 
          <Typography variant='h6'>
            Working out your arms can increase your muscle strength, muscle tone, and lean muscle mass. It can also reduce your 
            risk of injury, improve your posture, protect your bones, and stabilize your joints.
          </Typography>
        }
        {
          bodyPart === 'upper legs' && 
          <Typography variant='h6'>
            Leg workouts are an important aspect of a balanced, whole-body fitness routine that builds strength, speed, and stability.
            It’s important to stay consistent with your leg workouts since these large muscles are an integral part of your overall fitness. 
            Plus, it’s easier for your body to adapt to the workouts and develop good habits that will help you to meet your fitness goals.
          </Typography>
        }
        {
          bodyPart === 'waist' && 
          <Typography variant='h6'>
            Core exercises train the muscles in your core to work in harmony. This leads to better balance and steadiness, also called stability. 
            Stability is important whether you're on the playing field or doing regular activities.
          </Typography>
        }

        {extradetail.map((item)=>(
          <Stack key={item.name} direction ='row' gap='24px' alignItems='center'> 
            <Button sx={{background:'#fff2db',borderRadius:'50%', width:'100px',height:'100px'}}>
              <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
            </Button>
            <Typography textTransform='capitalize' variant='h5'>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail