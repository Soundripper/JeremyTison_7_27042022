const recipes = [
    {
        "id": 1,
        "name" : "Limonade de Coco",
        "servings" : 1,
        "ingredients": [
            {
                "ingredient" : "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient" : "Jus de citron",
                "quantity" : 2
            },
            {
                "ingredient" : "Crème de coco",
                "quantity" : 2,
                "unit" : "cuillères à soupe"
            },
            {
                "ingredient" : "Sucre",
                "quantity" : 30,
                "unit" : "grammes"
            },
            {
                "ingredient": "Glaçons"
            }
        ],
        "time": 10,
        "description": "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
        "appliance": "Blender",
        "ustensils": ["Cuillère à Soupe", "Verres", "Presse citron" ]
    },
    {
        "id": 2,
        "name" : "Poisson Cru à la tahitienne",
        "servings": 2,
        "ingredients": [
            {
                "ingredient" : "Thon Rouge (ou blanc)",
                "quantity" : 200,
                "unit" : "grammes"
            },
            {
                "ingredient" : "Concombre",
                "quantity" : 1
            },
            {
                "ingredient" : "Tomate",
                "quantity" : 2
            },
            {
                "ingredient" : "Carotte",
                "quantity" : 1
            },
            {
                "ingredient" : "Citron Vert",
                "quantity" : 5
            },
            {
                "ingredient" : "Lait de coco",
                "quantity" : 100,
                "unit" : "ml"
            }
        ],
        "time": 60,
        "description": "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco",
        "appliance": "Saladier",
        "ustensils": ["Presse citron"]
    },{
        "id": 3,
        "name": "Poulet coco réunionnais",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poulet",
                "quantity" : 1          
            },
            {
                "ingredient": "Lait de coco",
                "quantity" : 400,
                "unit" : "ml"
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity" : 25,
                "unit" : "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity" : 1
            },
            {
                "ingredient": "Poivron rouge",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
               "unit": "cuillères à soupe"
            }
        ],
        "time": 80,
        "description": "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
        "appliance": "Cocotte",
        "ustensils": ["Couteau"]
    },{
        "id": 4,
        "name": "Salade de riz",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Riz blanc",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Thon en miettes",
                "quantity": 200,
                "unit": "grammes"
            },{
                "ingredient": "Tomate",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf dur",
                "quantity": 2
            },
            {
                "ingredient": "Maïs",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 50,
        "description": "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..",
        "appliance": "Cuiseur de riz",
        "ustensils": ["Saladier", "Passoire"]
    },
    {
        "id": 5,
        "name": "Tarte au thon",
        "servings": 4,
        "ingredients":[
           {
               "ingredient": "Pâte feuilletée",
               "quantity": 1 
           },
           {
               "ingredient": "Thon en miettes",
               "quantity": 130,
               "unit": "grammes"
           },
           {
                "ingredient": "Tomate",
                "quantity": 2
           },
           {
               "ingredient": "Crème fraîche",
               "quantity": 2,
               "unit": "cuillères à soupe"
           },
           {
               "ingredient": "Gruyère râpé",
               "quantity": 100,
               "unit": "grammes"
           },
           {
                "ingredient": "Moutarde de Dijon",
                "quantity": 1,
                "unite": "cuillères à soupe"
           }
        ],
        "time": 45,
        "description": "Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes",
        "appliance":"Four",
        "ustensils": ["Moule à tarte", "Râpe à fromage", "Couteau"]
    },
    {
        "id": 6,
        "name": "Tarte aux pommes",
        "servings": 6,
        "ingredients":[
            {
                "ingredient": "Pâte brisée",
                "quantity": 1
            },
            {
                "ingredient": "Pomme",
                "quantity": 3
            },
            {
                "ingredient": "Oeuf",
                "quantity": "2"
            },
            {
                "ingredient":"Crème fraîche",
                "quantity":25,
                "unit": "cl"
            },
            {
                "ingredient": "Sucre en poudre",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachets"

            }
        ],
        "time": 50,
        "description": "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraîche. Laisser cuire au four pendant 30 minutes",
        "appliance": "Four",
        "ustensils": ["Moule à tarte", "Saladier", "Fourchette"]
    },{
        "id": 7,
        "name": "Tartelettes au chocolat et aux fraises",
        "servings": 6,
        "ingredients":[
            {
                "ingredient": "Pâte sablée",
                "quantity": 1
            }, 
            {
                "ingredient": "Chocolat au lait",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème liquide",
                "quantity": 80,
                "unit": "cl"
            },
            {
                "ingredient": "Beurre",
                "quantity": "30",
                "unit": "grammes"
            },
            {
                "ingredient": "Fraise",
                "quantity": 6
            }
        ],
        "time": 50,
        "description": "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
        "appliance":"Four",
        "ustensils":["Moule à tartelettes (6)", "Casserole"]
    }, {
        "id": 8,
        "name": "Brownie",
        "servings": 10,
        "ingredients":[
           {
                "ingredient": "Noix",
                "quantity": "180",
                "unit": "grammes"
           },
           {
               "ingredient": "Chocolat noir",
               "quantity": 150,
               "unit": "grammes"
           },
           {
               "ingredient": "Beurre",
               "quantity": 120,
               "unit": "grammes"
           },
           {
                "ingredient": "Oeuf",
                "quantity": 2
           },
           {
               "ingredient": "Sucre en poudre",
               "quantity": "110",
               "unit": "grammes"
           },
           {
                "ingredient": "Farine",
                "quantity": 90,
                "unit": "grammes"
           }

        ], 
        "time": 60,
        "description": "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
        "appliance": "Four",
        "ustensils": ["Moule à gateaux", "Casserole"]
    },
    {
        "id": 9,
        "name": "Salade Méditerannéene fraîche au chèvre",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Concombre",
                "quantity": 1
            },
            {
                "ingredient": "Olives"
            },
            {
                "ingredient": "Fromage de chèvre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Vinaigre Balsamic"
            },
            {
                "ingredient": "Huile d'olive"
            }, 
            {
                "ingredient": "Basilic"    
            }
        ],
        "time": 15,
        "description":"Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
        "appliance":"Saladier",
        "ustensils":["Cuillère en bois", "Couteau"]
    },
    {
        "id": 10,
        "name": "Tartiflette",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Roblochon",
                "quantity": "1"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 4.5,
                "unit": "kg"
            },
            {
                "ingredient": "Jambon fumé",
                "quantity": 2,
                "unit": "tranches"
            },
            {
                "ingredient": "Oignon",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Vin blanc sec",
                "quantity": 30,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description": "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
        "appliance":"Four",
        "ustensils": ["Plat à gratin", "Couteau","Économe"]
    },{
        "id": 11,
        "name": "Salade tomate, mozzarella et pommes",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Tomates cerises",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Jambon de parme",
                "quantity": 4,
                "unit": "tranches"
            }, 
            {
                "ingredient": "Pommes",
                "quantity": 1
            },
            {
                "ingredient": "Salade Verte",
                "quantity": 1
            },
            {
                "ingredient": "Vinaigrette",
                "quantity": 5,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description": "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ",
        "appliance": "Saladier",
        "ustensils": ["Couteau", "Cuillère à melon" ]
    },{
        "id": 12,
        "name": "Compote pomme rhubarbe",
        "servings": 4,
        "ingredients":[
            {
                "ingredient": "Rhubarbe",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Pommes",
                "quantity": 8
            },
            {
                "ingredient": "Sucre vanillé",
                "quantity": 6,
                "unit": "sachets"
            },
            {
                "ingredient": "Eau",
                "quantity" : "0.5",
                "unit" : "tasses"
            }
        ],
        "time": 40,
        "description": "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
        "appliance": "Casserole",
        "ustensils": ["Couteau", "Économe"]
    },
    {
        "id": 13,
        "name": "Salade mâchée de patates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Mâche",
                "quantity": 60,
                "unit": "grammes"
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Échalote",
                "quantity": 2

            },
            {
                "ingredient": "Vinaigre de cidre",
                "quantity": 1,
                "unit":"cuillère à soupe"
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 2,
                "unit": "Cuillère à soupe"
            }
        ],
        "time":40,
        "description":"Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
        "appliance": "Casserole",
        "ustensils":["Couteau","Saladier","Cuillère en bois"]
    },
    {
        "id": 14,
        "name": "Galette Bretonne Saucisse et Fromage à raclette",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Saucisse bretonne ou de toulouse",
                "quantity": 2
            },
            {
                "ingredient": "Farine de blé noir",
                "quantity": 130,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1

            },
            {
                "ingredient": "Fromage à raclette",
                "quantity": 300,
                "unit":"grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 75,
                "unit": "grammes"
            }

        ],
        "time": 100,
        "description":"Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
        "appliance": "Four",
        "ustensils":["Poelle à frire","Couteau"]
    },
    {
        "id": 15,
        "name": "Crêpes Chocolat Banane",
        "servings": 10,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Lait",
                "quantity": 600,
                "unit": "ml"
            },
            {
                "ingredient": "Beurre salé",
                "quantity": 30,
                "unit":"grammes"
            },
            {
                "ingredient": "Chocolat au lait",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Banane",
                "quantity": 4
            }
        ],
        "time": 60,
        "description":"Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
        "appliance": "Poële à crêpe",
        "ustensils":["Saladier", "Louche", "Cuillère en bois"]
    },
    {
        "id": 16,
        "name": "Gratin de pâtes à la tomate",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Mozzarella",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Pennes",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Basilic",
                "quantity": 1,
                "unit":"tiges"
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 2,
                "unit": "cuillère à soupe"
            }
        ],
        "time": 45,
        "description":"Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
        "appliance": "Four",
        "ustensils":["Plat à gratin", "Couteau", "Râpe à fromage"]
    },
    {
        "id": 17,
        "name": "Smoothie à la fraise",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Fraise",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Pastèque",
                "quantity": 0.5
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit":"cuillères à soupe"
            },
            {
                "ingredient": "Glaçons",
                "quantity": 8
            },
            {
                "ingredient": "Menthe"
            }
        ],
        "time": 15,
        "description":"Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraîcheur. Mixez le tout. Servir et déguster.",
        "appliance": "Blender",
        "ustensils":["Verres", "Couteau", "Presse citron"]
    },
    {
        "id": 18,
        "name": "Smoothie ananas et vanille",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Ananas",
                "quantity": 1
            },
            {
                "ingredient": "Glace à la vanille",
                "quantity": 500,
                "unit": "ml"
            },
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            }
        ],
        "time": 10,
        "description":"Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
        "appliance": "Blender",
        "ustensils":["Verres", "Couteau"]
    },
    {
        "id": 19,
        "name": "Shake Banane Kiwi",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Kiwis",
                "quantity": 4
            },
            {
                "ingredient": "Citron",
                "quantity": 1
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 30,
                "unit":"grammes"
            },
            {
                "ingredient": "Banane",
                "quantity": 1
            }
        ],
        "time": 0,
        "description":"Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
        "appliance": "Blender",
        "ustensils":["Couteau", "Verres", "Presse citron"]
    },
    {
        "id": 20,
        "name": "Pates Carbonara",
        "servings": 5,
        "ingredients": [
            {
                "ingredient": "Tagliatelles",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Parmesan",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 30,
        "description":"Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraîche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
        "appliance": "Sauteuse",
        "ustensils":["Râpe à fromage", "Cuillère en bois"]
    },
    {
        "id": 21,
        "name": "Spaghettis à la bolognaise",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Spaghettis",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 2
            },
            {
                "ingredient": "Coulis de tomate",
                "quantity": 300,
                "unit":"grammes"
            },
            {
                "ingredient": "Viande hachée 1% de matière grasse",
                "quantity": 400,
                "unit":"grammes"
            },
            {
                "ingredient": "Vin rouge",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity" : 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 30,
        "description":"Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraîche à la viande hachée. Serivir.",
        "appliance": "Casserole",
        "ustensils":["Cuillère en bois", "Louche", "Couteau"]
    },
    {
        "id": 22,
        "name": "Fondant au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Beurre",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            }
        ],
        "time": 30,
        "description":"Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.",
        "appliance": "Four",
        "ustensils":["Moule à gateaux", "Fouet", "Casserole"]
    },
    {
        "id": 23,
        "name": "Quiche lorraine",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pâte brisée",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Lait",
                "quantity": 20,
                "unit": "cl"
            }
        ],
        "time": 60,
        "description":"Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
        "appliance": "Four",
        "ustensils":["Moule à gateaux", "Rouleau à patisserie", "Fouet"]
    },
    {
        "id": 24,
        "name": "Salade de pâtes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Thon en miettes",
                "quantity": 160,
                "unit": "grammes"
            },
            {
                "ingredient": "Maïs",
                "quantity": 60,
                "unit": "grammes"
            },
            {
                "ingredient": "Tomate",
                "quantity": 1
            },
            {
                "ingredient": "Concombre",
                "quantity": 0.5
            },
            {
                "ingredient": "Macaronis",
                "quantity": 300,
                "unit": "grammes"
            },
            {
                "ingredient": "Mayonnaise",
                "quantity": 2,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 40,
        "description":"Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
        "appliance": "Saladier",
        "ustensils":["Couteau", "Cuillère en bois"]
    },
    {
        "id": 25,
        "name": "Cookies",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Chocolat noir en pepites",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            }
        ],
        "time": 30,
        "description":"Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
        "appliance": "Four",
        "ustensils":["Fouet", "Saladier", "Plaque de cuisson"]
    },
    {
        "id": 26,
        "name": "Soupe de tomates",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Tomate",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Huile d'olives"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            }
        ],
        "time": 25,
        "description":"Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
        "appliance": "Mixer",
        "ustensils":["Cocotte minute", "Couteau"]
    },
    {
        "id": 27,
        "name": "Soupe à l'oseille",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oseille",
                "quantity": 2
            },
            {
                "ingredient": "Oeuf",
                "quantity": 1
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 4,
                "unit": "cuillère à soupe"
            },
            {
                "ingredient": "Vermicelles",
                "quantity": 1,
                "unit":"verres"
            },
            {
                "ingredient": "Beurre salé",
                "quantity": 50,
                "unit": "grammes"
            }
        ],
        "time": 15,
        "description":"Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche",
        "appliance": "Casserole",
        "ustensils":["Couteau","Cuillère en bois"]
    },
    {
        "id": 28,
        "name": "Soupe de poireaux",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Poireau",
                "quantity": 3
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 400,
                "unit": "grammes"
            },
            {
                "ingredient": "Oseille",
                "quantity": 75,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit":"grammes"
            },
            {
                "ingredient": "Crême fraîche",
                "quantity": 10,
                "unit": "cl"
            }
        ],
        "time": 80,
        "description":"Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
        "appliance": "Mixer",
        "ustensils":["Casserole","Couteau"]
    },
    {
        "id": 29,
        "name": "Houmous Express",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pois chiches",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Ail",
                "quantity": 1,
                "unit": "gousses"
            },
            {
                "ingredient": "Citron",
                "quantity": 2
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Paprika"
            }
        ],
        "time": 30,
        "description":"Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
        "appliance": "Mixer",
        "ustensils":["Cuillère en bois", "Presse citron"]
    },
    {
        "id": 30,
        "name": "Purée de pois cassés",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pois Cassé",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Ail",
                "quantity": 2,
                "unit": "gousses"
            }
        ],
        "time": 60,
        "description":"Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
        "appliance": "Mixer",
        "ustensils":["Casserole", "Cuillère en bois"]
    },
    {
        "id": 31,
        "name": "Jardinière de légumes",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 2
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 2
            },
            {
                "ingredient": "Haricots verts",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Petits poids",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Lardons",
                "quantity": 150,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description":"Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
        "appliance": "Poële",
        "ustensils":["Couteau", "Économe"]
    },
    {
        "id": 32,
        "name": "Croque Monsieur à la dinde",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Blanc de dinde",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Emmental",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Gruyère",
                "quantity": 100,
                "unit":"grammes"
            },
            {
                "ingredient": "Lait",
                "quantity": 5,
                "unit": "cl"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pincées"
            }
        ],
        "time": 20,
        "description":"Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
        "appliance": "Four",
        "ustensils":["Râpe à fromage", "Cuillère à Soupe", "Couteau"]
    },
    {
        "id": 33,
        "name": "Sandwich au saumon fumé",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain de mie",
                "quantity": 8,
                "unit": "tranches"
            },
            {
                "ingredient": "Saumon Fumé",
                "quantity": 4,
                "unit": "tranches"
            },
            {
                "ingredient": "Feuilles de laitue",
                "quantity": 4
            },
            {
                "ingredient": "Fromage blanc",
                "quantity": 4,
                "unit":"cuillères à soupe"
            },
            {
                "ingredient": "Jus de citron",
                "quantity": 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 5,
        "description":"Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
        "appliance": "Four",
        "ustensils":["Couteau", "Cuillère en bois"]
    },
    {
        "id": 34,
        "name": "Purée de patate douce",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Patate douce",
                "quantity": 800,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Huile d'olive"
            },
            {
                "ingredient": "Orange",
                "quantity": 1
            }
        ],
        "time": 25,
        "description":"Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserole d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
        "appliance": "Mixer",
        "ustensils":["Couteau", "Économe", "Cuillère en bois"]
    },
    {
        "id": 35,
        "name": "Purée de carottes",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Carotte",
                "quantity": 6
            },
            {
                "ingredient": "Pommes de terre",
                "quantity": 1
            },
            {
                "ingredient": "Beurre",
                "quantity": 20,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 2,
                "unit":"cuillères à soupe"
            },
            {
                "ingredient": "Cumin",
                "quantity": 1,
                "unit": "cuillères à café"
            },
            {
                "ingredient": "Noix de muscade",
                "quantity": 1,
                "unit": "pincées"
            }
        ],
        "time": 25,
        "description":"Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.",
        "appliance": "Mixer",
        "ustensils":["Cocotte minute", "Couteau", "Cuillère en bois"]
    },
    {
        "id": 36,
        "name": "Lasagne Courgettes et Chèvre",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Courgette",
                "quantity": 2
            },
            {
                "ingredient": "Fromage de chèvre",
                "quantity": 4
            },
            {
                "ingredient": "Lait",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Lasagnes",
                "quantity": 5,
                "unit":"feuilles"
            },
            {
                "ingredient": "Gruyère",
                "quantity": 40,
                "unit": "grammes"
            },
            {
                "ingredient": "Maïzena",
                "quantity": 1,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 35,
        "description":"Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.",
        "appliance": "Four",
        "ustensils":["Plat à gratin", "Râpe à fromage", "Fouet"]
    },
    {
        "id": 37,
        "name": "Courgettes farcies au boeuf",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Courgette",
                "quantity": 2
            },
            {
                "ingredient": "Viande hachée",
                "quantity": 600,
                "unit": "grammes"
            },
            {
                "ingredient": "Huile d'olive",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oignon",
                "quantity": 1
            },
            {
                "ingredient": "Coulis de tomates",
                "quantity": 20,
                "unit": "cl"
            },
            {
                "ingredient": "Gruyère",
                "quantity": 50,
                "unit": "grammes"
            }
            
        ],
        "time": 60,
        "description":"Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
        "appliance": "Four",
        "ustensils":["Couteau", "Cuillère en bois", "Poelle à frire"]
    },
    {
        "id": 38,
        "name": "Pain Perdu",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pain",
                "quantity": 6,
                "unit":"tranches"
            },
            {
                "ingredient": "Lait",
                "quantity": 25,
                "unit": "cl"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Sucre roux",
                "quantity": 75,
                "unit": "grammes"
            }
        ],
        "time": 20,
        "description":"Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir",
        "appliance": "Four",
        "ustensils":["Fouet", "Bol","Cuillère à Soupe"]
    },
    {
        "id": 39,
        "name": "Crumble aux pommes",
        "servings": 40,
        "ingredients": [
            {
                "ingredient": "Pomme",
                "quantity": 2
            },
            {
                "ingredient": "Farine",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre roux",
                "quantity": 80,
                "unit":"grammes"
            }
        ],
        "time": 40,
        "description":"Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four",
        "appliance": "Four",
        "ustensils":["Saladier", "Couteau","Fouet"]
    },
    {
        "id": 40,
        "name": "Limonade",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Eau",
                "quantity": 1,
                "unit": "Litres"
            },
            {
                "ingredient": "Citron Vert",
                "quantity": 3
            },
            {
                "ingredient": "Sucre en poudre",
                "quantity": 4,
                "unit":"cuillères à café"
            },
            {
                "ingredient": "Bicarbonate",
                "quantity": 1,
                "unit": "cuillères à café"
            }
        ],
        "time": 10,
        "description":"Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
        "appliance": "Saladier",
        "ustensils":["Cuillère en bois"]
    },
    {
        "id": 41,
        "name": "Mousse au chocolat",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Chocolat noir",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachets"
            }
        ],
        "time": 20,
        "description":"Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
        "appliance": "Casserole",
        "ustensils":["Fouet", "Spatule", "Verres"]
    }, 
    {
        "id": 42,
        "name": "Charlotte au poires",
        "servings": 3,
        "ingredients": [
            {
                "ingredient": "Chocolat",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Poires au jus",
                "quantity": 0.5,
                "unit" : "boites"
            },
            {
                "ingredient": "Boudoirs",
                "quantity": 15
            }
        ],
        "time": 60,
        "description":"Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.",
        "appliance": "Moule à charlotte",
        "ustensils":["Saladier", "Couteau", "Fouet"]
    },
    {
        "id": 43,
        "name": "Tarte au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Pâte brisée",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre fondu",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 3
            },
            {
                "ingredient": "Citron"
            }
        ],
        "time": 50,
        "description":"Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ",
        "appliance": "Four",
        "ustensils":["Rouleau à patisserie", "Moule à tarte", "Presse citron"]
    }, 
    {
        "id": 44,
        "name": "Crème déssert au chocolat",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litres"
            },
            {
                "ingredient": "Chocolat",
                "quantity": 200,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 50,
                "unit":"grammes"
            },
            {
                "ingredient": "Farine",
                "quantity": 40,
                "unit": "grammes"
            }
        ],
        "time": 15,
        "description":"Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres",
        "appliance": "Casserole",
        "ustensils":["Cuillère en bois"]
    },
    {
        "id": 45,
        "name": "Crème patissière",
        "servings": 8,
        "ingredients": [
            {
                "ingredient": "Lait",
                "quantity": 50,
                "unit": "cl"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 2
            },
            {
                "ingredient": "Farine",
                "quantity": 30,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 80,
                "unit":"grammes"
            }
        ],
        "time": 30,
        "description":"Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
        "appliance": "Casserole",
        "ustensils":["Fouet","Saladier"]
    },
    {
        "id": 46,
        "name": "Far breton",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Farine",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 150,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre vanillé",
                "quantity": 1,
                "unit": "sachets"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 4
            },
            {
                "ingredient": "Lait",
                "quantity": 1,
                "unit": "litre"
            },
            {
                "ingredient": "Pruneaux",
                "quantity": 100,
                "unit": "grammes"
            }
        ],
        "time": 60,
        "description":"Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
        "appliance": "Four",
        "ustensils":["Fouet", "Moule", "Verres"]
    },
    {
        "id": 47,
        "name": "Mousse au citron",
        "servings": 6,
        "ingredients": [
            {
                "ingredient": "Jus de citron",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Mascarpone",
                "quantity": 250,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre",
                "quantity": 100,
                "unit": "grammes"
            },
            {
                "ingredient": "Crème fraîche",
                "quantity": 20,
                "unit":"cl"
            }
        ],
        "time": 5,
        "description":"Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
        "appliance": "Saladier",
        "ustensils":["Fouet", "Verres", "Cuillère en bois"]
    },
    {
        "id": 48,
        "name": "Pizza",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Pâte à pizza",
                "quantity": 1
            },
            {
                "ingredient": "Tomates pelées",
                "quantity": 1,
                "unit": "boites"
            },
            {
                "ingredient": "Lardons",
                "quantity": 1,
                "unit": "barquettes"
            },
            {
                "ingredient": "Champignons de paris",
                "quantity": 1,
                "unit":"boites"
            },
            {
                "ingredient": "Gruyère",
                "quantity": 200,
                "unit": "grammes"
            }
        ],
        "time": 40,
        "description":"Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes",
        "appliance": "Four",
        "ustensils":["Rouleau à patisserie", "Râpe à fromage","Couteau"]
    },
    {
        "id": 49,
        "name": "Smoothie tropical",
        "servings": 4,
        "ingredients": [
            {
                "ingredient": "Bananes",
                "quantity": 2
            },
            {
                "ingredient": "Kiwis",
                "quantity": 3
            },
            {
                "ingredient": "Mangue",
                "quantity": 1
            },
            {
                "ingredient": "Ananas",
                "quantity": 4,
                "unit":"tranches"
            },
            {
                "ingredient": "Miel",
                "quantity": 2,
                "unit": "cuillères à soupe"
            }
        ],
        "time": 0,
        "description":"Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
        "appliance": "Blender",
        "ustensils":["Couteau", "Verres"]
    },
    {
        "id": 50,
        "name": "Frangipane",
        "servings": 2,
        "ingredients": [
            {
                "ingredient": "Pâte feuilletée",
                "quantity": 400,
                "unit":"grammes"
            },
            {
                "ingredient": "Oeuf",
                "quantity": 6
            },
            {
                "ingredient": "Poudre d'amendes",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Beurre",
                "quantity": 500,
                "unit": "grammes"
            },
            {
                "ingredient": "Sucre glace",
                "quantity": 500,
                "unit":"grammes"
            }
        ],
        "time": 60,
        "description":"Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
        "appliance": "Four",
        "ustensils":["Rouleau à patisserie","Fouet"]
    }
]
class RecipeFactory {
    constructor(data){
        return new ModelRecipe(data);
    }
}

class ModelRecipe {
    constructor(data) {
        this._id = data.id
        this._name = data.name
        this._servings = data.servings
        this._ingredients = data.ingredients
        this._time = data.time
        this._description = data.description
        this._appliance = data.appliance
        this._ustensils = data.ustensils
    }
    get id() {
        return this._id
    }
    get name() {
        return this._name
    }
    get ingredients() {
        return this._ingredients
    }
    get quantity() {
        return this._quantity
    }
    get unit() {
        return this._unit
    }
    get time() {
        return this._time
    }
    get description() {
        return this._description
    }
    get appliance() {
        return this._appliance
    }
    get ustensils() {
        return this._ustensils
    }
}

class SearchForm {
    constructor (subject) {
        // this._recipes = Recipes;
        this.subject = subject;
        this.searchGeneral = document.createElement('div')
        this.searchGeneralWrapper = document.querySelector('.search_General_wrapper')
        this.recettesCardsWrapper = document.querySelector('.recettesCardsWrapper')
    }

    inputSearch() {
        this.searchGeneralWrapper
            .querySelector('.search_General')
            .addEventListener('input', e => {
                const query = e.target.value;
                if (query.length >= 3) {
                    // console.log("main search sup à 3 char");
                    const value = e.target.value;
                    this.subject.run(
                        {
                            'type': 'main_search',
                            value
                        }
                    )
                } else  {
                    // console.log("main search inf à 3 char");
                    this.subject.run(
                        {
                            'type': 'main_search',
                            'value' : ''
                        }
                    )
                }   
            })
        
    }
    render() {
        const searchForm = `
        <div class="input-group col-12 mx-auto mt-3">
            <input class="form-control py-2 search_General" type="search" placeholder="Rechercher une recette" id="searchBar">
            <span class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                <i class="bi bi-search" ></i>
                </button>
            </span>
        </div>`
        this.searchGeneral.innerHTML = searchForm;
        this.searchGeneralWrapper.appendChild(this.searchGeneral);
        this.inputSearch();
    }
}

class IngAppUst{
    constructor(data){
        this._data = data;
        this._IngAppUstWrapper = document.getElementById('searchListsDropdowns');
        this._dropIngBtnDiv = document.createElement('div');
        this._dropIng = document.createElement('div');
        this._dropAppBtnDiv = document.createElement('div');
        this._dropApp = document.createElement('div');
        this._dropUstBtnDiv = document.createElement('div');
        this._dropUst = document.createElement('div');
        this.btn = null;
    }

    render(data){
        this._IngAppUstWrapper.innerHTML = ''
        this._dropIngBtnDiv.innerHTML = ''
        this._dropIng.innerHTML = ''
        this._dropAppBtnDiv.innerHTML = ''
        this._dropApp.innerHTML = ''
        this._dropUstBtnDiv.innerHTML = ''
        this._dropUst.innerHTML = ''

        //////Ing Button + Search
        this._dropIngBtnDiv.classList.add('dropdown', 'mr-3', 'dropIngBtnDiv')
        this._dropIngBtnDiv.innerHTML = `
            <button type="button" class="btn btn-primary dropdown-toggle mb-2 show" 
            id="dropIngBtn" type="button" data-toggle="collapse" 
                data-target="#dropIng, #dropIngBtn" aria-haspopup="true" aria-expanded="false">
                Ingrédients
            </button>
        `;
        this._IngAppUstWrapper.appendChild(this._dropIngBtnDiv);

        this._dropIng.classList.add('collapse', 'bg-primary', 'mr-3', 'mb-2', 'rounded', 'dropCollapse')
        this._dropIng.setAttribute('id', 'dropIng')
        this._dropIng.innerHTML = `
            <div class="dropdown-container bg-primary rounded">
                <div class="form">
                    <input type="search" id="ingSearch" class="form-control border-0 bg-primary 
                    text-light searchAdv" placeholder="Rechercher un ingrédient" aria-label="Search" />
                </div>
                <div class="choices ingChoices">
                </div>
            </div>
        `;
        this._IngAppUstWrapper.appendChild(this._dropIng);

        //////App Button + Search
        this._dropAppBtnDiv.classList.add('dropdown', 'mr-3', 'dropAppBtnDiv')
        this._dropAppBtnDiv.innerHTML = `
            <button type="button" class="btn btn-success dropdown-toggle mb-2 show" 
            id="dropAppBtn" type="button" data-toggle="collapse" 
                data-target="#dropApp, #dropAppBtn" aria-haspopup="true" aria-expanded="false">
                Appareils
            </button>
        `;
        this._IngAppUstWrapper.appendChild(this._dropAppBtnDiv);

        this._dropApp.classList.add('collapse', 'bg-success', 'mr-3', 'mb-2', 'rounded', 'dropCollapse')
        this._dropApp.setAttribute('id', 'dropApp')
        this._dropApp.innerHTML = `
            <div class="dropdown-container bg-success rounded">
                <div class="form">
                    <input type="search" id="appSearch" class="form-control border-0 bg-success 
                    text-light searchAdv" placeholder="Rechercher un appareil" aria-label="Search" />
                </div>
                <div class="choices appChoices">
                </div>
            </div>
        `;
        this._IngAppUstWrapper.appendChild(this._dropApp);

        //////Ust Button + Search
        this._dropUstBtnDiv.classList.add('dropdown', 'mr-3', 'dropAppBtnDiv')
        this._dropUstBtnDiv.innerHTML = `
            <button type="button" class="btn btn-danger dropdown-toggle mb-2 show" 
            id="dropUstBtn" type="button" data-toggle="collapse" 
                data-target="#dropUst, #dropUstBtn" aria-haspopup="true" aria-expanded="false">
                Ustensiles
            </button>
        `
        this._IngAppUstWrapper.appendChild(this._dropUstBtnDiv);

        this._dropUst.classList.add('collapse', 'bg-danger', 'mr-3', 'mb-2', 'rounded', 'dropCollapse')
        this._dropUst.setAttribute('id', 'dropUst')
        this._dropUst.innerHTML = `
            <div class="dropdown-container bg-danger rounded">
                <div class="form">
                    <input type="search" id="ustSearch" class="form-control border-0 bg-danger 
                    text-light searchAdv" placeholder="Rechercher un ustensile" aria-label="Search" />
                </div>
                <div class="choices ustChoices">
                </div>
            </div>
        `
        this._IngAppUstWrapper.appendChild(this._dropUst);
        
        this.renderFiltered(data);
    }

    ///////////////// Ingredients Appareils Ustensiles => Populate from available recipes //////////////////////////
    renderFiltered(data){
        const ingChoices = document.querySelector('.ingChoices');
        let ingredients = [];
        ingChoices.innerHTML = "" ;
        for (let i=0; i<data.length; i++){
            for (let j=0; j<data[i].ingredients.length; j++){
                ingredients.push(data[i].ingredients[j].ingredient);
            }
        }
        ingredients = [...new Set(ingredients)];
        for (let i=0; i<ingredients.length; i++){
            this.btn = document.createElement('button');
            this.btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
            this.btn.innerHTML = `${ingredients[i]}`;
            ingChoices.appendChild(this.btn);
        }

        let appareils = [];
        for (let i=0; i<data.length; i++){
            appareils.push(data[i].appliance);
        }
        appareils = [...new Set(appareils)];
        const appChoices = document.querySelector('.appChoices');
        appChoices.innerHTML ='';
        for (let i=0; i<appareils.length; i++){
            this.btn = document.createElement('button');
            this.btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
            this.btn.innerHTML = `${appareils[i]}`;
            appChoices.appendChild(this.btn);
        }

        let ustensils = [];
        for (let i=0; i<data.length; i++){
            ustensils.push(data[i].ustensils);
        }
        let ustensilsFlat = "".split.call(ustensils, ",");
        ustensilsFlat = [...new Set(ustensilsFlat)];
        const ustChoices = document.querySelector('.ustChoices');
        ustChoices.innerHTML ='';
        for (let i=0; i<ustensilsFlat.length; i++){
            this.btn = document.createElement('button');
            this.btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
            this.btn.innerHTML = `${ustensilsFlat[i]}`;
            ustChoices.appendChild(this.btn);
        }
    }

} 

class TemplateCard {
    constructor (recipe) {
        this._recipe = recipe
        this.cardWrapper = document.createElement('div')
        this.cardWrapper.classList.add('card', 'mx-2', 'mb-5')
    }

    // get recipe() {
    //     return this._recipe
    // }

    createRecipeCard(){
        const imag = document.createElement('img');
        imag.classList.add('card-img-top');
        this.cardWrapper.append(imag);
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML += `
                <div class="d-flex justify-content-between">
                     <h6 class="card-title">${this._recipe.name}</h6>
                     <h6><i class="bi bi-clock"></i> <span class="ml-1">${this._recipe.time} min</span> </h6>
                </div>
        `
        this.cardWrapper.appendChild(cardBody);
        const ingRow = document.createElement('div');
        ingRow.classList.add('row', 'pt-2');
        cardBody.appendChild(ingRow);
        const ingWrapper = document.createElement('div');
        ingWrapper.classList.add('col-6', 'ingredientsW');
        ingRow.appendChild(ingWrapper);
        const recipeDescription = document.createElement('div');
        recipeDescription.classList.add('card-text', 'col-6', 'px-2', 't7', 'recipe-text');
        recipeDescription.innerHTML = `${this._recipe.description}`;
        ingRow.appendChild(recipeDescription);

        for (let i=0; i<this._recipe.ingredients.length; i++){
            const ing = document.createElement('div');
            ing.classList.add('t7', 'd-flex', 'justify-items-around');
            ing.innerHTML += `
                <p class="card-text fw-bolder m-0 ingredient">${this._recipe.ingredients[i].ingredient}: &nbsp</p>
                <p class="card-text"> ${this._recipe.ingredients[i].quantity} ${this._recipe.ingredients[i].unit} </p>
            `;
            ingWrapper.appendChild(ing);
        }
        
        return this.cardWrapper;
    }
}

class RecipesObserver {
    constructor(defaultRecipes, advTemplate, advFilter, advFiltersSearchBar) {
        this.advtemplate = advTemplate;
        this.advFilter = advFilter;
        this.advFiltersSearchBar = advFiltersSearchBar;
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper');
        this.IngAppUstWrapper = document.getElementById('searchListsDropdowns');
        this._defaultRecipes = defaultRecipes;
        this._mainSearch = '';
        this._listIngredients = [];
        this._listAppareils = [];
        this._listUstensils = [];
    }

    update = (action) => {
        this.recipesWrapper.innerHTML = "";
        switch (action.type) {
            case 'main_search':
                
                startDate = Date.now();

                this._mainSearch = action.value;
                this.filterCascade();
                this.applyAll(this._defaultRecipes);
                break;

            case 'ingredient_search':
                this._defaultRecipes = recipes;
                ////////////// si _listIngredients inclue le tag concerné
                if (this._listIngredients.includes(action.itemName)){
                    for (let i=0; i<this._listIngredients.length; i++){
                        if (this._listIngredients[i] === action.itemName){
                            this._listIngredients.splice(i,1);
                        }
                    }
                }
                ////////////// si _listIngredients n'inclue pas le tag concerné
                else {
                    this._listIngredients.push(action.itemName);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                this.filterCascade();                
                this.applyAll(this._defaultRecipes);
                break;
                
            case 'appareil_search':
                this._defaultRecipes = recipes;
                ////////////// si _listAppareils inclue le tag concerné
                if (this._listAppareils.includes(action.itemName)){
                    if (this._listAppareils.includes(action.itemName)){
                        for (let i=0; i<this._listAppareils.length; i++){
                            if (this._listAppareils[i] === action.itemName){
                                this._listAppareils.splice(i,1);
                            }
                        }
                    }
                }
                ////////////// si _listAppareils n'inclue pas le tag concerné
                else {
                    this._listAppareils.push(action.itemName);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                this.filterCascade();                
                this.applyAll(this._defaultRecipes);
                break;

            case 'ustensils_search':
                this._defaultRecipes = recipes;
                ////////////// si _listAppareils inclue le tag concerné
                if (this._listUstensils.includes(action.itemName)){
                    for (let i=0; i<this._listUstensils.length; i++){
                        if (this._listUstensils[i] === action.itemName){
                            this._listUstensils.splice(i,1);
                        }
                    }
                }
                ////////////// si _listAppareils n'inclue pas le tag concerné
                else {
                    this._listUstensils.push(action.itemName);
                }
                ////////////////////////////////////////////////////////////////////////////////////////
                this.filterCascade();                
                this.applyAll(this._defaultRecipes);
                break;
        }
    }
    
    filterTheFilters = () => {
        const tagItems = document.querySelectorAll('.dropdown-item');
        let arrAdvToFilter = Array.from(tagItems);
        for(let i=0; i<arrAdvToFilter.length; i++){
            for (let j=0; j<this._listIngredients.length; j++){
                if(arrAdvToFilter[i].innerHTML.toLowerCase().includes(this._listIngredients[j].toLowerCase())){
                    arrAdvToFilter[i].remove();
                }   
            }
            for (let k=0; k<this._listAppareils.length; k++){
                if(arrAdvToFilter[i].innerHTML.toLowerCase().includes(this._listAppareils[k].toLowerCase())){
                    arrAdvToFilter[i].remove();
                }  
            }
            for (let l=0; l<this._listUstensils.length; l++){
                if(arrAdvToFilter[i].innerHTML.toLowerCase().includes(this._listUstensils[l].toLowerCase())){
                    arrAdvToFilter[i].remove();
                }  
            }
        }
    }

    applyAll = (resultRecipes) => {
        for (let i = 0; i < resultRecipes.length; i++) {
            const Template = new TemplateCard(resultRecipes[i]);
            this.recipesWrapper.appendChild(Template.createRecipeCard());
        }
        this.advtemplate.renderFiltered(this._defaultRecipes);
        this.advFilter.tagClickInit(this._defaultRecipes);
        this.filterTheFilters();
        endDate = Date.now();
        // testTime();
    }

    filterCascade = () => {
        this._defaultRecipes = recipes;
        this.filteredRecipes = [];
        if (this._mainSearch.length > 0) {
            for(let i=0; i<this._defaultRecipes.length; i++){
                for(let j=0; j<this._defaultRecipes[i].ingredients.length; j++){
                    if(
                    this._defaultRecipes[i].name.toLowerCase().includes(this._mainSearch.toLowerCase()) || 
                    this._defaultRecipes[i].description.toLowerCase().includes(this._mainSearch.toLowerCase()) ||
                    this._defaultRecipes[i].ingredients[j].ingredient.toLowerCase().includes(this._mainSearch.toLowerCase())){
                        // console.log("includes");
                        this.filteredRecipes.push(this._defaultRecipes[i]);
                        this.filteredRecipes = [...new Set(this.filteredRecipes)];
                    }
                }  
            }
            this._defaultRecipes = this.filteredRecipes;
        }

        if (this._listIngredients.length > 0) {
            this.filteredRecipes=[];
            for (let i=0; i<this._defaultRecipes.length; i++){
                let cptIngredients = 0;
                for (let j=0; j<this._listIngredients.length; j++){
                    for (let k=0; k<this._defaultRecipes[i].ingredients.length; k++){
                        if (this._defaultRecipes[i].ingredients[k].ingredient.includes(this._listIngredients[j])){
                            cptIngredients++;
                        }
                    }
                }
                if (cptIngredients === this._listIngredients.length){
                    this.filteredRecipes.push(this._defaultRecipes[i]);
                }
            }
            this.filteredRecipes = [...new Set(this.filteredRecipes)];
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

  
        if (this._listAppareils.length > 0) {
            this.filteredRecipes=[];
            for (let j=0; j<this._defaultRecipes.length; j++){
                if (this._defaultRecipes[j].appliance.includes(this._listAppareils[0])){
                    // this._defaultRecipes = this._defaultRecipes.slice(j,1);
                    console.log(this._defaultRecipes[j]);
                    this.filteredRecipes.push(this._defaultRecipes[j]);
                }
            }
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

        if (this._listUstensils.length > 0) {
            console.log("filtercascade");
            console.log(this._listUstensils);
            this.filteredRecipes=[];
            for (let i=0; i<this._defaultRecipes.length; i++){
                let cptUstensils = 0;
                for (let j=0; j<this._listUstensils.length; j++){
                    if (this._defaultRecipes[i].ustensils.includes(this._listUstensils[j])){
                        cptUstensils++;
                    }
                }
                if (cptUstensils === this._listUstensils.length){
                    this.filteredRecipes.push(this._defaultRecipes[i]);
                }
            }
            this.filteredRecipes = [...new Set(this.filteredRecipes)];
            this._defaultRecipes = this.filteredRecipes;
            console.log(this._defaultRecipes);
        }

        if (this._defaultRecipes.length === 0){
            console.log('Aucune recette ne correspond à la recherche');
            const recettesWrapper = document.querySelector('.recettesCardsWrapper');
            recettesWrapper.innerHTML = `
                <h6 class="noResultMessage">Aucune recette ne correspond à la recherche</h6>
            `
        }
    }
}

class RecipesSubject {
    constructor() {
        this.observers = [];
    }

    subscribe = (observer) => {
        this.observers.push(observer);
    }

    run = (action) => {
        for(let i=0; i<this.observers.length; i++){
            this.observers[i].update(action)
        }
    }
}

class AdvFilters{
    constructor(subject){
        this.subject = subject;
        this.filterBadgesWrapper = null;
        this.btnTags = null;
        this.itemName = null;
        this.resultInput = null;
    }
    advFiltersSearchBar = () => {
        // console.log("advFiltersSearchBar");
        const dropMenus = document.querySelectorAll('.dropCollapse');
        for (let i=0; i<dropMenus.length; i++){
            const advSearch = dropMenus[i].querySelectorAll('.searchAdv')
            const advSearchValue = (event) => {
                const tagItems = dropMenus[i].querySelectorAll('.dropdown-item')
                this.resultInput = event.target.value;
                let arrAdv = Array.from(tagItems);
                for (let i=0; i<arrAdv.length; i++){
                    if(arrAdv[i].innerHTML.toLowerCase().includes(this.resultInput.toLowerCase())){
                        arrAdv[i].style.display = 'flex';
                    }
                    else{
                        arrAdv[i].style.display = 'none';
                    }
                }
            }
            for (let i=0; i<advSearch.length; i++){
                advSearch[i].addEventListener('input', advSearchValue)
            }
        }  
    }

    ///////////////////////////////////////////////////////////////////////////////
    // Gestionnaire Ajout Tags //
    tagClickInit = () => {
        this.filterBadgesWrapper = document.getElementById('filterBadgesWrapper');
        this.btnTags = document.querySelectorAll('.dropdown-item');

        let ingSearch = document.getElementById('ingSearch');
        ingSearch.value = "";
        let appSearch = document.getElementById('appSearch');
        appSearch.value = "";
        let ustSearch = document.getElementById('ustSearch');
        ustSearch.value = "";

        for(let i=0; i<this.btnTags.length; i++){
            this.btnTags[i].addEventListener('click', (e) => {
                this.itemName = e.target.innerHTML;
                const newBtn = document.createElement('span');
                if (e.target.classList.contains('ing')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle xIng"></i>
                    </button>
                `;
                this.subjectRunIng(this.subject);
                }
                else if (e.target.classList.contains('app')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle xApp"></i>
                    </button>
                `;
                this.subjectRunApp(this.subject);
                }
                else if (e.target.classList.contains('ust')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle xUst"></i>
                    </button>
                `;
                this.subjectRunUst(this.subject);
                }
                this.tagCloseAdd(newBtn);
                filterBadgesWrapper.appendChild(newBtn);
            })
        }
    }

    tagClickAdd = (newBtn) => {
        let ingSearch = document.getElementById('ingSearch');
        ingSearch.value = "";
        let appSearch = document.getElementById('appSearch');
        appSearch.value = "";
        let ustSearch = document.getElementById('ustSearch');
        ustSearch.value = "";
        
        newBtn.addEventListener('click', (e) => {
                this.itemName = e.target.innerHTML;
                const newBtn = document.createElement('span');
                if (e.target.classList.contains('ing')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-primary position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle xIng"></i>
                    </button>
                `;
                this.subjectRunIng(this.subject);
                }
                else if (e.target.classList.contains('app')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-success position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle xApp"></i>
                    </button>
                `;
                this.subjectRunApp(this.subject);
                }
                else if (e.target.classList.contains('ust')) {
                    newBtn.innerHTML = `
                    <button type="button" class="btn btn-danger position-relative me-2 mb-2 tag">
                    <span> ${this.itemName} </span> &nbsp
                    <i class="bi bi-x-circle xUst"></i>
                    </button>
                `;
                this.subjectRunUst(this.subject);
                }
                this.tagCloseAdd(newBtn);
                
                filterBadgesWrapper.appendChild(newBtn);
        })
    }

    tagCloseAdd = (btn) => {
        btn.addEventListener('click', (e) => {

            let ingSearch = document.getElementById('ingSearch');
            ingSearch.value = "";
            let appSearch = document.getElementById('appSearch');
            appSearch.value = "";
            let ustSearch = document.getElementById('ustSearch');
            ustSearch.value = "";

            this.itemName = e.target.parentNode.querySelector('span').innerHTML;
            this.itemName = this.itemName.trim();

            if (e.target.classList.contains('xIng')) {
                this.wrapper = document.querySelector('.ingChoices');
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-primary', 'bg-primary', 'text-light', 'ing');
                btn.innerHTML = this.itemName;
                this.wrapper.appendChild(btn);
                this.tagClickAdd(btn);
                this.subjectRunIng(this.subject);
                e.target.parentNode.parentNode.remove();
            }
            else if (e.target.classList.contains('xApp')) {
                this.wrapper = document.querySelector('.appChoices')
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-success', 'bg-success', 'text-light', 'app');
                btn.innerHTML = this.itemName;
                this.wrapper.appendChild(btn);
                this.tagClickAdd(btn);
                this.subjectRunApp(this.subject);
                e.target.parentNode.parentNode.remove();
            }
            else if (e.target.classList.contains('xUst')) {
                this.wrapper = document.querySelector('.ustChoices');
                const btn = document.createElement('button');
                btn.classList.add('dropdown-item', 'btn-danger', 'bg-danger', 'text-light', 'ust');
                btn.innerHTML = this.itemName;
                this.wrapper.appendChild(btn);
                this.tagClickAdd(btn);
                this.subjectRunUst(this.subject);
                e.target.parentNode.parentNode.remove();
            }
        })    
    }

    subjectRunIng = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'ingredient_search',
                itemName
            })
    }
    subjectRunApp = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'appareil_search',
                itemName
            })
    }
    subjectRunUst = (subject) => {
        const itemName = this.itemName;
        subject.run(
            {
                'type': 'ustensils_search',
                itemName
            })
    }
}

///////////////////////////////////////////////////////////////////////////////
// Dropdowns manager //
const dropBtns = document.querySelectorAll('.dropdown-toggle');
let dropDowns = document.querySelectorAll('.dropCollapse');
document.addEventListener("click", (e) => {
    if(e.target.classList.contains('dropdown-toggle')){
        for (let i=0; i<dropDowns.length; i++){
            if(dropDowns[i].classList.contains('show')){
                dropDowns[i].classList.toggle("show");
            }
        }
    }
    else {
        if( (e.target.classList.contains('dropdown-item')) || (e.target.classList.contains('searchAdv')) ){ }
            else {
                for (let i=0; i<dropDowns.length; i++){
                        dropDowns[i].classList.remove("show");
                }
                for (let i=0; i<dropBtns.length; i++){
                    dropBtns[i].classList.add("show");
                }
            }
        }
});

for (let i=0; i<dropBtns.length; i++){
    dropBtns[i].addEventListener("click", (e) => {
        for (let i=0; i<dropBtns.length; i++){
        dropBtns[i].classList[e.target === dropBtns[i] ? 'add' : 'add']("show")
        }
    })
};

let startDate = Date.now();
let endDate = Date.now();

const testTime = () => {
    console.log("applyAll Time = ");
    console.log(startDate);
    console.log(endDate);
    console.log(endDate - startDate);
}

class App {
    constructor() {
        this.recipesWrapper = document.querySelector('.recettesCardsWrapper')
        this.recipesAll = []
        this.recipes = recipes;
        // this.recipesFiltered = []
    }
    async recipesAllFunction() {
        for (let i=0; i < this.recipes.length; i++){
            this.recipesAll.push(new RecipeFactory(this.recipes[i]));
        }
    }
    async main() {
        await this.recipesAllFunction();

        this.recipesSubject = new RecipesSubject();
        const AdvFiltersTemplate = new IngAppUst(this.recipesSubject);
        let AdvFiltersI = new AdvFilters(this.recipesSubject);
        this.recipesResult = new RecipesObserver(this.recipesAll, AdvFiltersTemplate, AdvFiltersI);
        this.recipesSubject.subscribe(this.recipesResult);

        const Search = new SearchForm(this.recipesSubject);
        Search.render()

        AdvFiltersTemplate.render(this.recipesAll);
        
        AdvFiltersI.tagClickInit(this.recipesSubject);
        AdvFiltersI.advFiltersSearchBar();
        
        for (let i=0; i < this.recipesAll.length; i++){
            const Template = new TemplateCard(this.recipesAll[i])
            this.recipesWrapper.appendChild(Template.createRecipeCard())
        }
    }
}

const app = new App()
app.main()

