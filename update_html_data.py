#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re

def update_html_with_json_data():
    # Carregar dados do JSON
    with open('monster_data.json', 'r', encoding='utf-8') as f:
        monster_data = json.load(f)
    
    # Ler arquivo HTML
    with open('index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Converter dados do JSON para formato JavaScript
    js_data = "        const monsters = {\n"
    
    for category, monsters in monster_data.items():
        js_data += f"            '{category}': [\n"
        for monster in monsters:
            js_data += f"                {{name: '{monster['name']}', level: {monster['level']}, base_xp: {monster['base_xp']}, job_xp: {monster['job_xp']}, odin_base: {monster['odin_base']}, odin_job: {monster['odin_job']}, location: '{monster['location']}', size: '{monster['size']}', element: '{monster['element']}'}},\n"
        js_data += "            ],\n"
    
    js_data += "        };"
    
    # Substituir dados antigos pelos novos
    pattern = r'const monsters = \{[^}]+\};'
    # Usar um padrão mais específico para capturar todo o objeto monsters
    pattern = r'const monsters = \{[\s\S]*?\n        \};'
    
    html_content = re.sub(pattern, js_data, html_content, flags=re.DOTALL)
    
    # Salvar arquivo atualizado
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print("✅ Arquivo HTML atualizado com sucesso!")
    print(f"📊 Total de monstros adicionados:")
    for category, monsters in monster_data.items():
        print(f"   • {category.capitalize()}: {len(monsters)} monstros")

if __name__ == "__main__":
    update_html_with_json_data()