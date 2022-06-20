import { React, useState, useEffect } from 'react'
import SurveyText from '../components/SurveyText'
import SubmitButton from '../components/SubmitButton'
import { Grid, Select, MenuItem, Button } from '@mui/material'
import SurveyCard from '../components/SurveyCard'
import RatingButtons from '../components/RatingButtons'
import CustomerInput from '../components/CustomerInput'
import { getSurveys, submitSurvey } from '../services/surveyService'
const QuestionPage = (props) => {

    const [answer, setAnswer] = useState("")
    const [score, setScore] = useState("")
    const [id, setId] = useState("")
    const [surveyQuestions, setSurveyQuestions] = useState([])
    const [selectedSurveyQuestion, setSelectedSurveyQuestion] = useState('')


    const [topics, setTopics] = useState([]);
    const [topic, setTopic] = useState("Select");

    const [isLoading, setIsLoading] = useState(true)
    const [isCompleted, setCompleted] = useState(false)


    let answerModel = {
        surveyId: "",
        answer: "",
        score: ""

    }


    const handleComment = (event) => {
        setAnswer(event.target.value);

    }



    const submitClick = () => {
        answerModel.answer = answer;
        answerModel.score = score;
        answerModel.surveyId = id;
        submitSurvey(answerModel).then(result => {
            console.log("Result", result)
            setCompleted(true)
        }).catch(error => {
            setIsLoading(false)
            console.log("http error", error);
        });


    }

    const handleClick = (rate) => {
        setScore(rate);



    }
    const handleChange = (event) => {
        setAnswer("")
        setScore(null)
        setTopic(event.target.value)
        console.log(topics)
        let selectedQuestionTemp = surveyQuestions.filter(item => item.topic == event.target.value)
        setSelectedSurveyQuestion(selectedQuestionTemp)
        setId(selectedQuestionTemp[0].id)
    }

    useEffect(() => {
        let res = [];
        getSurveys().then(survey => {
            res = survey
            console.log(res.data)
            res.data.map((item) => {
                console.log(item)
                setTopics(topics => [...topics, item.topic])
            })
            setSurveyQuestions(survey.data)
            setIsLoading(false)
        }).catch(error => {
            setIsLoading(false)
            console.log("http error", error);
        });


    }, [])

    const createMenuItem = (topics) => {
        const menuList = []
        topics.map((item, i) => {
            var menu = <MenuItem key={i} value={item} >{item}</MenuItem>
            menuList.push(menu)
            return "";

        })
        return menuList;

    }


    return (
        <Grid container sx={{ justifyContent: 'center' }}>
            {isCompleted ? <Grid>Thanks for your answer</Grid> :

                <Grid item xs={12} style={{ marginTop: 50, marginBottom: 20, width: 460, maxWidth: 460, justifyContent: 'center' }}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Select
                            sx={{ width: 460 }}
                            id="demo-simple-select"
                            value={topic}
                            onChange={handleChange}
                        >
                            {createMenuItem(topics)}

                        </Select>
                    </Grid>
                    <Grid item xs={12} style={{ height: '100%' }}>
                        {isLoading ? <Grid></Grid> : selectedSurveyQuestion.length > 0 ? <SurveyCard>
                            <Grid container justifyContent='center' spacing={2} style={{ padding: '1.5rem' }}>
                                <Grid item xs={12} sm={12} md={12}>
                                    <SurveyText question={'How likely are you to recommend ' + topic + "to your friend."}>
                                    </SurveyText>
                                </Grid>
                                <Grid item xs={12}>
                                    <RatingButtons onClick={handleClick}>
                                    </RatingButtons>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <SurveyText question={selectedSurveyQuestion.length > 0 ? selectedSurveyQuestion[0].question : "Boş soru"}>
                                    </SurveyText>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{ p: '1rem' }}>
                                    <CustomerInput onChange={handleComment}></CustomerInput>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} sx={{ textAlign: 'center' }}>
                                    <SubmitButton onClick={() => { submitClick() }} >
                                        {'Submit'}
                                    </SubmitButton>
                                </Grid>
                            </Grid>
                        </SurveyCard> : <Grid></Grid>}
                    </Grid>
                </Grid>}



        </Grid>
    )
}

export default QuestionPage