"""Perguntando o nome e a quantidade de XP"""
nomeHeroi = str(input("Digite o nome do Herói?:"))
xpHeroi = int(input("Quantida de XP do Herói:"))

if xpHeroi < 1000:
    print(" O Herói De Nome: {} Está No Nivel Ferro".format(nomeHeroi))
elif xpHeroi >= 1001 and xpHeroi <= 2000:
    print(" O Herói De Nome: {} Está No Nivel Ferro".format(nomeHeroi))
elif xpHeroi >= 2001 and xpHeroi <= 5000:
    print("Prata")
elif xpHeroi>= 5001 and xpHeroi <= 7000:
    print("Ouro")
elif xpHeroi >= 7001 and xpHeroi <= 8000:
    print("Platina")
elif xpHeroi >= 8001 and xpHeroi <= 9000:
    print("Ascendente")
elif xpHeroi >= 9001 and xpHeroi <=10000:
    print("Imortal")
else:
    print("Radiante") 