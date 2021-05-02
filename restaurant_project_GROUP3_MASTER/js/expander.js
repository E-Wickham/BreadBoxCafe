window.onload = onPageLoad

function onPageLoad(){
    //job 1 var
    var jobPostContainer1 = document.getElementById("jobItem1");
    var jobInfo = document.getElementById('jobinfo1');
    var applybtn1 = document.getElementById('applyButton1');


    //job 2 var

    var jobPostContainer2 = document.getElementById("job-item2");
    var jobInfo2 = document.getElementById('jobinfo2');
    var applybtn2 = document.getElementById('applyButton2');

    //job 3 var

    var jobPostContainer3 = document.getElementById("job-item3");
    var jobInfo3 = document.getElementById('jobinfo3');
    var applybtn3 = document.getElementById('applyButton3');

    //job 4 var

    var jobPostContainer4 = document.getElementById("job-item4");
    var jobInfo4 = document.getElementById('jobinfo4');
    var applybtn4 = document.getElementById('applyButton4');


    //job 5 var

    var jobPostContainer5 = document.getElementById("job-item5");
    var jobInfo5 = document.getElementById('jobinfo5');
    var applybtn5 = document.getElementById('applyButton5');

    

    function job1Expander() {

        if (jobPostContainer1.classList.contains("job-item")) {
            jobPostContainer1.className="big-job-item";
            jobInfo.className="jobinfo";
            applybtn1.innerHTML='close';
            console.log('done');
        } else if (jobPostContainer1.classList.contains("big-job-item")) {
            jobPostContainer1.className="job-item";
            jobInfo.classList.remove("jobinfo");
            jobInfo.classList.add("hidden-jobinfo");
            applybtn1.innerHTML='Learn More';
            console.log('part2 done');
        }
       
       
    }

    function job2Expander() {

        if (jobPostContainer2.classList.contains("job-item")) {
            jobPostContainer2.className="big-job-item";
            jobInfo2.className="jobinfo";
            applybtn2.innerHTML='close';
            console.log('done');
        } else if (jobPostContainer2.classList.contains("big-job-item")) {
            jobPostContainer2.className="job-item";
            jobInfo2.classList.remove("jobinfo");
            jobInfo2.classList.add("hidden-jobinfo");
            applybtn2.innerHTML='Learn More';
            console.log('part2 done');
        }
    }

    function job3Expander() {
       
        if (jobPostContainer3.classList.contains("job-item")) {
            jobPostContainer3.className="big-job-item";
            jobInfo3.className="jobinfo";
            applybtn3.innerHTML='close';
            console.log('done');
        } else if (jobPostContainer3.classList.contains("big-job-item")) {
            jobPostContainer3.className="job-item";
            jobInfo3.classList.remove("jobinfo");
            jobInfo3.classList.add("hidden-jobinfo");
            applybtn3.innerHTML='Learn More';
            console.log('part2 done');
        }
    }

    function job4Expander() {
       
        if (jobPostContainer4.classList.contains("job-item")) {
            jobPostContainer4.className="big-job-item";
            jobInfo4.className="jobinfo";
            applybtn4.innerHTML='close';
            console.log('done');
        } else if (jobPostContainer4.classList.contains("big-job-item")) {
            jobPostContainer4.className="job-item";
            jobInfo4.classList.remove("jobinfo");
            jobInfo4.classList.add("hidden-jobinfo");
            applybtn4.innerHTML='Learn More';
            console.log('part2 done');
        }
    }

    function job5Expander() {
       
        if (jobPostContainer5.classList.contains("job-item")) {
            jobPostContainer5.className="big-job-item";
            jobInfo5.className="jobinfo";
            applybtn5.innerHTML='close';
            console.log('done');
        } else if (jobPostContainer5.classList.contains("big-job-item")) {
            jobPostContainer5.className="job-item";
            jobInfo5.classList.remove("jobinfo");
            jobInfo5.classList.add("hidden-jobinfo");
            applybtn5.innerHTML='Learn More';
            console.log('part2 done');
        }
    }
    applyButton1.onclick = job1Expander;   
    applyButton2.onclick = job2Expander;   
    applyButton3.onclick = job3Expander;   
    applyButton4.onclick = job4Expander;   
    applyButton5.onclick = job5Expander;   
}

