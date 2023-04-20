secret="giraffe"
guess=''
guess_count=0
guess_limit=3
ot_of_guesses=False

while guess != secret and not (ot_of_guesses):
    if guess_count<guess_limit:
        guess=input('what is the word: ')
    guess_count+=1
else:
    ot_of_guesses=True
if ot_of_guesses:
    print('you lose')
else:
    print('you won')