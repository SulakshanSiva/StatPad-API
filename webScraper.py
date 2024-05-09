from bs4 import BeautifulSoup
import requests
import csv

url = "https://fbref.com/en/squads/47c64c55/2022-2023/Crystal-Palace-Stats"
result = requests.get(url)
doc = BeautifulSoup(result.text, "html.parser")

tbody_tag = doc.find("tbody")

player_names = []
ages = []
position = []
mp = []
numGoals = []
numAssists = []
xG = []
clubName = "Crystal Palace"

if tbody_tag:
    
    tr_tags = tbody_tag.find_all("tr")
    
    for tr_tag in tr_tags:
        # Player Name
        a_tag = tr_tag.find("a")
        if a_tag:
            player_names.append(a_tag.get_text())

        # Player Age
        age_td = tr_tag.find("td", {"data-stat": "age"})
        if age_td:
            ages.append(age_td.get_text())

        # Player Position
        pos_td = tr_tag.find("td", {"data-stat": "position"})
        if pos_td:
            position.append(pos_td.get_text())

        # Player Matches Played
        mp_td = tr_tag.find("td", {"data-stat": "games"})
        if mp_td:
            mp.append(mp_td.get_text())

        # Player Goals
        goals_td = tr_tag.find("td", {"data-stat": "goals"})
        if goals_td:
            goals_text = goals_td.get_text()
            if goals_text.strip():
                numGoals.append(goals_text)
            else:
                numGoals.append('0')

        # Player Assists
        assist_td = tr_tag.find("td", {"data-stat": "assists"})
        if assist_td:
            assist_text = assist_td.get_text()
            if assist_text.strip():
                numAssists.append(assist_text)
            else:
                numAssists.append('0')

        # Player xG per 90
        xG_td = tr_tag.find("td", {"data-stat": "xg_per90"})
        if xG_td:
            xG_text = xG_td.get_text()
            if xG_text.strip():
                xG.append(xG_text)
            else:
                xG.append('0.00')

# Write data to CSV file
with open('player_data.csv', mode='a', newline='') as file:
    writer = csv.writer(file)
    # Write header if the file is empty
    if file.tell() == 0:
        writer.writerow(['Club','Player Name', 'Age', 'Position', 'Matches Played', 'Goals', 'Assists', 'xG per 90'])
    # Write data rows
    for data in zip([clubName]*len(player_names), player_names, ages, position, mp, numGoals, numAssists, xG):
        writer.writerow(data)
