#include <iostream>
#include <vector>
#include <string>

using namespace std;

//==================== CLASS PRODUCT ====================

class Product
{
private:
    int code;
    string name;
    int quantity;
    double unitPrice;

public:
    Product(int c, string n, int q, double p)
    {
        code = c;
        name = n;
        quantity = q;
        unitPrice = p;
    }

    int getCode()
    {
        return code;
    }

    string getName()
    {
        return name;
    }

    int getQuantity()
    {
        return quantity;
    }

    double getPrice()
    {
        return unitPrice;
    }

    void addQuantity(int q)
    {
        quantity += q;
    }

    bool removeQuantity(int q)
    {
        if (quantity >= q)
        {
            quantity -= q;
            return true;
        }

        return false;
    }
};

//==================== STRUCT TRANSACTION ====================

struct Transaction
{
    int productCode;
    string date;      // مثال: 1405-03-15
    int quantity;
    double price;
};

//==================== GLOBAL VARIABLES ====================

vector<Product> products;
vector<Transaction> purchases;
vector<Transaction> sales;

//==================== SEARCH PRODUCT ====================

int findProduct(int code)
{
    for (int i = 0; i < products.size(); i++)
    {
        if (products[i].getCode() == code)
            return i;
    }

    return -1;
}

//==================== ADD PRODUCT ====================

void addProduct()
{
    int code, quantity;
    string name;
    double price;

    cout << "\nEnter Product Code: ";
    cin >> code;

    if (findProduct(code) != -1)
    {
        cout << "Product code already exists!\n";
        return;
    }

    cout << "Enter Product Name: ";
    cin >> name;

    cout << "Enter Quantity: ";
    cin >> quantity;

    cout << "Enter Unit Price: ";
    cin >> price;

    products.push_back(Product(code, name, quantity, price));

    cout << "Product added successfully.\n";
}

//==================== PURCHASE ====================

void purchaseProduct()
{
    Transaction t;

    cout << "\nEnter Product Code: ";
    cin >> t.productCode;

    int index = findProduct(t.productCode);

    if (index == -1)
    {
        cout << "Product not found!\n";
        return;
    }

    cout << "Enter Date (YYYY-MM-DD): ";
    cin >> t.date;

    cout << "Enter Quantity: ";
    cin >> t.quantity;

    cout << "Enter Purchase Price: ";
    cin >> t.price;

    products[index].addQuantity(t.quantity);

    purchases.push_back(t);

    cout << "Purchase registered successfully.\n";
}

//==================== SALE ====================

void sellProduct()
{
    Transaction t;

    cout << "\nEnter Product Code: ";
    cin >> t.productCode;

    int index = findProduct(t.productCode);

    if (index == -1)
    {
        cout << "Product not found!\n";
        return;
    }

    cout << "Enter Date (YYYY-MM-DD): ";
    cin >> t.date;

    cout << "Enter Quantity: ";
    cin >> t.quantity;

    cout << "Enter Sale Price: ";
    cin >> t.price;

    if (!products[index].removeQuantity(t.quantity))
    {
        cout << "Insufficient inventory!\n";
        return;
    }

    sales.push_back(t);

    cout << "Sale registered successfully.\n";
}

//==================== INVENTORY REPORT ====================

void inventoryReport()
{
    double totalValue = 0;

    cout << "\n========== INVENTORY REPORT ==========\n";

    for (int i = 0; i < products.size(); i++)
    {
        cout << "Code: " << products[i].getCode()
             << " | Name: " << products[i].getName()
             << " | Quantity: " << products[i].getQuantity()
             << " | Unit Price: " << products[i].getPrice()
             << endl;

        totalValue += products[i].getQuantity() *
                      products[i].getPrice();
    }

    cout << "\nTotal Inventory Value = "
         << totalValue << endl;
}

//==================== PURCHASE REPORT ====================

void purchaseReport()
{
    string targetDate;

    cout << "\nEnter Date (YYYY-MM-DD): ";
    cin >> targetDate;

    cout << "\n========== PURCHASE REPORT ==========\n";

    for (int i = 0; i < purchases.size(); i++)
    {
        if (purchases[i].date <= targetDate)
        {
            cout << purchases[i].date
                 << " | Product Code: "
                 << purchases[i].productCode
                 << " | Quantity: "
                 << purchases[i].quantity
                 << " | Price: "
                 << purchases[i].price
                 << endl;
        }
    }
}

//==================== SALES REPORT ====================

void salesReport()
{
    string targetDate;

    cout << "\nEnter Date (YYYY-MM-DD): ";
    cin >> targetDate;

    cout << "\n========== SALES REPORT ==========\n";

    for (int i = 0; i < sales.size(); i++)
    {
        if (sales[i].date <= targetDate)
        {
            cout << sales[i].date
                 << " | Product Code: "
                 << sales[i].productCode
                 << " | Quantity: "
                 << sales[i].quantity
                 << " | Price: "
                 << sales[i].price
                 << endl;
        }
    }
}

//==================== MAIN ====================

int main()
{
    int choice;

    do
    {
        cout << "\n================================\n";
        cout << "1. Add Product\n";
        cout << "2. Purchase Product\n";
        cout << "3. Sell Product\n";
        cout << "4. Inventory Report\n";
        cout << "5. Purchase Report\n";
        cout << "6. Sales Report\n";
        cout << "0. Exit\n";
        cout << "================================\n";

        cout << "Enter Choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            addProduct();
            break;

        case 2:
            purchaseProduct();
            break;

        case 3:
            sellProduct();
            break;

        case 4:
            inventoryReport();
            break;

        case 5:
            purchaseReport();
            break;

        case 6:
            salesReport();
            break;

        case 0:
            cout << "Program Ended.\n";
            break;

        default:
            cout << "Invalid Choice!\n";
        }

    } while (choice != 0);

    return 0;
}
/*1. let a=2;
let b=6;
let c=8;
let d=10;
function calculateResult(a,b,c,d){
    let result;
    if(a>(b+c)){
        result=a*c;
    }else{
        result=b*d;
    }
    console.log("Result:",result);
}

calculateResult(a,b,c,d);*/



/*2. function generateMultiplesOfTwo(){
    for(let i=1; i<=1000; i++){
        let multiple=i*2;
    if(multiple<=1000){
        console.log(multiple);
    }else{
        break;
    }
    }
}
generateMultiplesOfTwo();*/



/*3. function generateMultiplesOfNine(){
    let sum=0;
    for(let i=1; i<=100;i++){
        let multiple=i*9;
        console.log(multiple);
        sum+=multiple
    }
    console.log("TotalSum:",sum)
}
generateMultiplesOfNine();*/

/*4.*/



/*5.const staff=[
    {
        id :1,
        salary:100000,
    },
    {
        id :1,
        salary:50000,
    },
    {
        id :1,
        salary:70000,
    },
    {
        id :1,
        salary:90000,
    }
];
const calculateTax=(params)=>{
    params.map(item=>{
        if(item.salary<50000){
            console.log('moaf');
        }else if(item.salary>=50000 && item.salary<100000){
            console.log(item.salary*10/100);
        }else if(item.salary<100000){
            console.log(item.salary*15/100);
        }
    })
}
calculateTax(staff);*/



/*6.function isDivisibleByDigitSum(N){
    let sumOfDigits=0;
    let temp=N;
    while(temp>0){
        sumOfDigits+=temp%10;
        temp=Math.floor(temp/10);
    }
    if(N%sumOfDigits===0){
        console.log(N);
    }else{
        console.log(N);
    }
}
isDivisibleByDigitSum(18);*/



/*7.function printMultiplesOfThere(){
    let M= 1;
    let N =10;
    if(M>N){
        console.log();
        return;  
    }
    console.log();

    for(let i =M; i<=N; i++){
        if(i % 3 === 0){
            console.log(i);
        }
    }
}
printMultiplesOfThere();*/



/*8.!function convertBase3ToBase10(){
    let base3=1;
    let base10=0;
    for(let i =0;i<base3; i++){
        let=10;
    }
 console.log(base10);
 return;
}
convertBase3ToBase10();*/



/*9.function printPalindromicTwoDigtNumbers(){
    console.log();
    for(let i=10; i<100; i++){
        let tensDigt=Math.floor(i/10);
        let unitsDigt=i%10;
        if(tensDigt===unitsDigt){
            console.log(i);
        }
    }
}
printPalindromicTwoDigtNumbers();*/



/*10.function isPrime(num){
    if(num<=1)return false;
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i ===0)return false;
    }
    return true;
}
function isPerfect(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i;
        }
    }
    return sum===num;
}
function generatePrimesAndPerfectNumbers(){
    console.log();
    for(let i=3; i<1000;i+=2){
        if(isPrime(i)){
            console.log(i);
        }
    }
    console.log();
    for(let j=1;j<1000;j++){
        if(isPerfect(j)){
            console.log(j);
        }
    }
}
generatePrimesAndPerfectNumbers();*/



/*11.function findMulitplesOfFourDivisors(){
    let N=10;
    if(N<=0){
        console.log();
        return;
    }
    let MulitplesOfFour=N*4;
    console.log(MulitplesOfFour);
    for(let i=1; i<=MulitplesOfFour; i++){
        if(MulitplesOfFour%i===0){
            console.log(i);
            sumOfDivisors+=i;
            counOfDivisors+=1;
        }
    }
    console.log(counOfDivisors);
    console.log(sumOfDivisors);
}
findMulitplesOfFourDivisors();*/



/*12.function guessTheNumber(){
    const randomNumber=Math.floor(Math.random()*1000)+1;
    let guess;
    let attempts=0;
    console.log(guess);
    while(true){
        guess=10;
        attempts++;
        if(isNaN(guess)||guess<1||guess>1000){
            console.log();
            continue;
        }
       if(guess===randomNumber){
        console.log(randomNumber);
        console.log(attempts);
        break;
       }else if(guess<randomNumber){
        console.log();
       }else{
        console.log();
       }
    }
}
guessTheNumber();*/



/*13.let a=5;
let b=10;
console.log(a,b);
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);*/



/*14.*/

/*15.*/

/*16.*/



/*17.function getDateFromDayOfYear(day){
    const daysInMaonth=[31,28,31,30,31,30,31,31,30,31,30,31,30,31];
    let month=0;
    let daysOfMaonth=day;
    let N1=64;
    let N2=216;

    for(let i=0; i<daysInMaonth.length;i++){
        if(daysOfMaonth>daysInMaonth[i]){
            daysOfMaonth-=daysInMaonth[i];
        }else{
            month=i+1;
            break;
        }
        console.log(N1);
        console.log(N2);
    }
    const dateString=`${month}/${daysOfMaonth}`;
    return dateString;
}
getDateFromDayOfYear();*/



/*18.function getLineEquation(x1,y1,x2,y2){
    const A =y2-y1;
    const B =x1-x2;
    const C=A*x1+B*y1;
    console.log(`AX+BY=C`);
}
const x1="print M:";
const y1="print M:";
const x2="print N:";
const y2="print N:";


getLineEquation(x1,y1,x2,y2);*/



/*19.function analyzeDigit(N){
    let evenCount=0;
    let oddCount=0;
    let zeroCount=0;

    const digits=N.toString();

    for(let i =0;i<digits.lenghth;i++){
        const digit=parselnt(digits[i]);

        if(digit===0){
            zeroCount++;
        }else if(digit % 2===0){
            evenCount++;
        }else{
            oddCount++;
        }
    }
    console.log(evenCount);
    console.log(oddCount);
    console.log(zeroCount);
}*/



/*20.function generateNumbers(){
    const validNumbers=[];

    for(let num=1000;num<10000;num++){
        const thousandsDigit=Math.floor(num/1000);
        const hunderedsDigit=Math.floor(num/100);
        const tensDigit=Math.floor(num/10);
        const unitDigit=Math.floor(num%10);

        if(thousandsDigit % 2 !==0 && hunderedsDigit % 2 ===0 && tensDigit % 2 !==0){
            validNumbers.push(num);
        }
    }
    console.log("Valid four-digit numbers:");
    validNumbers.forEach(number=>console.log(number));
}
generateNumbers();*/



/*21.function generateOddDigitNumbers(){
    console.log("Two-digit numbers consisting of odd digit:");
    for(let num = 10; num<100; num++){
        const tensDigit =Math.floor(num/10);
        const unitsDigt =num%10;
        if(tensDigit%2 !== 0 && unitsDigt %2 !== 0){
            console.log(num);
        }
    }
    
}
generateOddDigitNumbers();*/



/*22.function constNaturalPointsInCircle(){
    const radius=5;
    let count=0;
    for(let x=1;x<=radius;x++){
        for(let y=1;y<=radius;y++){
            if(x * x + y * y < radius * radius){
                count++;
            }
        }
    }
    console.log(`Number of natural points inside the circle x2+y2=25:${count}`);
}
constNaturalPointsInCircle();*/



/*23.function generateThereDigitNumbers(){
    console.log("There-digit numbers where the unit and hundred digit are equal and the ten digit is even:");
    for(let num=100;num<1000;num++){
        const hunderedsDigit=Math.floor(num/100);
        const tensDigit =Math.floor((num%100)/10);
        const unitDigit=num % 10;
        if(hunderedsDigit === unitDigit&&tensDigit%2===0){
            console.log(num);
        }
    }
}
generateThereDigitNumbers();*/


/*24.function countWaysToMake50(){
    const target = 50;
    const coins =[20 , 10 , 5];
    let count = 0;

    for(let x = 1; x * coins[0]<=target;x++){
        for(let y = 1 ; y * coins[1]<=target;y++){
            for(let z=1; z*coins[2]<=target;z++){
                const total=x*coins[0]+y*coins[1]+z*coins[2];
                if(total === target){
                    count++;
                }
            }
        }
    }
    console.log(`The number of ways to make 50 Toman using 20,10,and5 Toman coins is :${count}`);
}
countWaysToMake50();*/




<script src="https://gist.github.com/zyzyhyhy/eb26d84f495e209c9718329554ac181e.js"></script>
