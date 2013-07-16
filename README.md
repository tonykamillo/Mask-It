Mask-It
=======

Is lightweight and simple, jQuery plugin to mask fields that need to format.

##Usage

```javascript
$('input-to-mask').mask('your-mask-format')
```
To build your mask, you must to use sharp character (#) see bellow: 

```javascript
/*
-phone: ## (##) ####-####
-brazilian zip code: ## ###-###

#Sample: 
Consider the input of id "phone-number" that has the value 556399548719
and the value to 77020600 for brazilian zipcode with id "zip-code"
*/
		
$('#phone-number').mask('## (##) ####-#####');
$('#zip-code').mask('## ###-###');

```
			
The results should be:

    55 (63) 9954-8719
    77 020-600
    
			
Simple uh?!
			
Have fun!
