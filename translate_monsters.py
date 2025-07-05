#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

def translate_monster_names():
    # Carregar traduções
    with open('monster_translations.json', 'r', encoding='utf-8') as f:
        translations = json.load(f)['translations']
    
    # Carregar dados dos monstros
    with open('monster_data.json', 'r', encoding='utf-8') as f:
        monster_data = json.load(f)
    
    # Aplicar traduções
    for category in monster_data:
        for monster in monster_data[category]:
            original_name = monster['name']
            if original_name in translations:
                monster['name_pt'] = translations[original_name]
                monster['name_en'] = original_name
            else:
                monster['name_pt'] = original_name
                monster['name_en'] = original_name
                print(f"⚠️ Tradução não encontrada para: {original_name}")
    
    # Salvar dados atualizados
    with open('monster_data.json', 'w', encoding='utf-8') as f:
        json.dump(monster_data, f, indent=2, ensure_ascii=False)
    
    print("✅ Traduções aplicadas com sucesso!")
    
    # Estatísticas
    total_monsters = sum(len(monsters) for monsters in monster_data.values())
    print(f"📊 Total de monstros traduzidos: {total_monsters}")

if __name__ == "__main__":
    translate_monster_names()