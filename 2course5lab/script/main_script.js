let n, k, n_value, k_value;
window.onload=function(){
    n = document.getElementById('n_input');
    k = document.getElementById('step');
    let btn = document.getElementById('do_btn_1')

    n.addEventListener('change',function (){
        if(!n.value) btn.disabled = true;
        k.addEventListener('change',function(){
            btn.disabled = (!k.value || !n.value)
            n_value = n.value;
            k_value = k.value;
        })
    })
}

function fact(val){
    if(val <= 1) return 1;
    else return val*fact(val-1);
}

function seq(){
    let ans = document.getElementById('res_1')
    let amount = 0;
    if(k_value > 0 && n_value > 0){
        let i = 1;
        ans.innerText = '';
        while(i <= n_value){
            let res = (Math.pow(2,i)/fact(i));
            let str_res = String(res.toPrecision(2));
            if(Math.sqrt(res) % 2 === 0){
                amount++;
                str_res = str_res.fontcolor('purple');
            }
            ans.innerHTML += " " + str_res;
            i += parseInt(k_value);
        }
    }
    alert('Кількість членів, що є квадратами парних чисел: ' + amount);
    return amount;
}