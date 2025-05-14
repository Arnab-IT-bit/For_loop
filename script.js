// qs-1
function even(n) {
    for(let i =1;i<=n;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
function odd(n){
     for(let i =1;i<=n;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
}

// qs 3
function evenReverse(n){
    for(let i =n;i>=0;i--){
         if(i%2==0){
            console.log(i);
        }
    }
}
// qs-6
function series6() {
    for(let i = 2;i<100;i+=3){
        console.log(i);
    }
}
// qs-7
function series7() {
    let j = 2;
    for(let i = 1;i<=10;i++){
        console.log(j);
        j+=3;
    }
}
// qs -8
function series8() {
    for(let i = 1;i<100;i*=2){
        console.log(i);
    }
}
// qn-9
function series9() {
    let j = 1;
    for(let i = 1;i<=10;i++){
        console.log(j);
        j*=2;
    }
}
// qs-10
function series10() {
    let j = 5;
    for(let i = 1;i<=10;i++){
        console.log(j);
        j+=5;
    }
}
// qs-11
function series11() {
    for(let i = 1;i<=10;i++){
        if (i%2 == 0) {
            console.log("-"+i)
        }
        else{
            console.log(i)
        }
    }
}
// qs-12 same
// qs-13
function series13() {
   let i = 3;
   while(i<50){
    console.log(i);
    i+=4;
    console.log("-"+i);
    i+=4;
   }
}


//  qs-15
function series15() {
    let j =3;
    for(let i =1;i<=16;i+=1){
        if (i%3 == 0) {
            console.log("-"+j);
        }
        else{
            console.log(j);
        }
        j+=3;
    }
}
// qs 16 same
// qs 17
function series17(){
    for(let i = 1;i<=20;i++){
        if(i%2==0){
            console.log("0");
        }
        else{
            console.log("1");
        }
    }
}
// qs 19
function series19() {
    let count = 0;
    let a = 1;
    let b = 0 ;
    for(let i = 1;i<=20;i++){
        
        if (count!=2) {
            console.log(a);
            count++;
        }
        else{
            count = 0;
            let temp = a;
            a = b;
            b = temp;
        }

    }
}

// qs 22
function series22() {
    let j = 2;
    for(let i = 2;i<12;i++){
        console.log(j)
        j+=i;
    }
}

// qs 24
function series24() {
    for(let i =1;i<=15;i++){
        console.log(i*i);
    }
}
// qs 26
function series26() {
    let j = 5;
    for(let i = 1;i<=10;i++){
        console.log(j);
        j = j+2*i;
    }
}
// qs 27
function fibonacii(n) {
    let a = 0;
    let b  = 1;
    console.log(a);
    console.log(b);
    
    for(let i = 3;i<=n;i++){
        let c = a+b;
        console.log(c);
        a = b;
        b = c;
    }

}
// qs 28
function series28(n) {
   
    for(let i = 0;i<n;i++){
         let res = 0;
        for(let j = 0;j<=i;j++){
            res += Math.pow(10,j);
        }
        console.log(res);
    }
}
// qs 29
function series29(n) {
    for(let i = 1;i<=n;i++){
        let res = 0;
        for(let j = 1;j<=i;j++){
            res += j*Math.pow(10,i-j);
        }
        console.log(res)
    }
}
function series30(n) {
    
    for(let i = 1;i<=n;i++){
         let k = 1;
         let sum = 0;
         for(let j = 1;j<=i;j++){
            sum += k*Math.pow(10,i-j);
            k+=2;
         }
         console.log(sum);
    }
}
function series31(n){
    for(let i = 1;i<=n;i++){
        let sum = 0;
        for(let j = 1;j<=i;j++){
            sum += i*Math.pow(10,i-j);
        }
        console.log(sum);
    }
}
function series32(n) {
    for(let i = 1;i<=n;i++){
        let sum = 0;
        for(let j = 1;j<=i;j++){
            sum += 9*Math.pow(10,i-j);
        }
        console.log(sum);
    }
}
function series33(n) {
    for(let i = 1;i<=n;i++){
        let ans =  2*Math.pow(i,2)*(i+1);
        console.log(ans);
    }
}
function series34(x) {
    for(let i = 0;i<5;i++){
        console.log(Math.pow(x,i));
    }
}
function series37(n) {
    let sum = 0;
    for(let i  = 1;i<=n;i++){
        sum += 1/i
    }
    console.log(sum);
}
function series38(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum += (i*(i+1))/2;
    }
    console.log(sum);
}
//additional function
function factorial(n) {
    if(n == 0 || n==1){
        return 1;
    }
    return n*factorial(n-1);
}
function series39(n,x) {
    let j = 0;
    for(let i = 0;i<n;i++){
        sum += Math.pow(-1,i)*(Math.pow(x,j)/factorial(j));
        j += 2;
    }
    console.log(sum);
}
function ap(a,n,d){
    let sum = (n*(2*a+(n-1)*d))/2;
    console.log(sum);
}
function gp(a,n,r) {
    let sum = (a*(Math.pow(r,n)-1))/(r-1);
    console.log(sum);
}
function series42(n){
    let sum = 0;
    for(let i = 1;i<=n;i++){
        sum += i*(i+1);
    }
    console.log(sum);
}

