console.log(
    (_=()=>('puts(%[<?php echo( ]+%(console.log((_='+_+')())).inspect+%[)?>])'))()
    )

(_=()=>('('+_+')()'))()
/*
('puts( 
    %[<?php echo( ] + %(console.log((_='+_+')())).inspect + %[)?>]
    )')

    %[<?php echo( 
        ] + %(console.log((_='+_+')())).inspect + %[
            )?>]

        ] + %(
            console.log((_='+_+')()))
            .inspect + %[

*/

(_ = (() => {console.log('_ =('+_+')()')}))()
(_=()=>('(_='+_+')()'))()

(_=()=>console.log('(_='+_+')()'))()



(_=()=>console.log(
    `(_='+${_}+')()`
    ))()


(_=()=>console.log(`puts'(_='+${_}+')()'`))()
    