function saturdayFun(activity){
    if(activity){
        return ( `This Saturday, I want to ${activity}!`);
    }
    return ('This Saturday, I want to roller-skate!')
};

function mondayWork(activity){
    if(activity){
        return("This Monday, I will work from home.")
    };
    return ("This Monday, I will go to the office.");
};

function wrapAdjective(msg)
{
    const august = function(name, lang = "You are") 
    {
    return `${lang} ${msg}${name}${msg}!`
    }

    return august;
}