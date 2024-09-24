// code your solution here
function saturdayFun(param){
    if (param !== undefined) {
        return 'This Saturday, I want to bathe my dog!'
        
    } else { return 'This Saturday, I want to roller-skate!'
        
    }
}
function mondayWork(param){
     if (param !== undefined) { return 'This Monday, I will work from home.'
        
     } else { return "This Monday, I will go to the office."
        
     }
}
function wrapAdjective(initial) {

    if (initial ==='*') {return  function (adjective){
        return `You are *${adjective}*!`;
    }
        
    } else if(initial === '||'){return function (adjective){
        return `You are ||${adjective}||!`
    }}

}