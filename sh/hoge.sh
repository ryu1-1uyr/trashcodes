echo '//////////////////'

for i in {1..31}
do
    if(($i%15==0));then
        echo fizzbuzz
    elif (($i%5==0));then
        echo buzz
    elif(($i%3==0));then
        echo fizz
    else echo $i
    fi
done


echo '//////////////////'
exit 0
