import pandas as pd
import json

file_path = './data.csv'  
df = pd.read_csv(file_path, delimiter=',') 

print(df.columns)

df = df.drop(columns=['User Email', 'Names of Completed Arcade Games'])

df.columns = ['user_name', 'profile_url', 'profile_status', 
              'redemption_status', 'badges_games_completed', 
              'num_badges_completed', 'completed_badge_names', 
              'num_arcade_games_completed']

df.fillna('', inplace=True)  

df = df.sort_values(by=['redemption_status', 'num_badges_completed', 'num_arcade_games_completed'], ascending=False) 

data_list = df.to_dict(orient='records')

# sorted_data = sorted(data_list, key=lambda x: (x['redemption_status'], x['num_badges_completed'], x['num_arcade_games_completed']), reverse=True)

json_data = json.dumps(data_list, indent=4)

with open('../public/output.json', 'w') as json_file:
    json_file.write(json_data)

print("Data has been sorted, processed, and saved to output.json")
