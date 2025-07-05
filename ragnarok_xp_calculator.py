import tkinter as tk
from tkinter import ttk, messagebox
from datetime import datetime, timedelta
import json

class RagnarokXPCalculator:
    def __init__(self, root):
        self.root = root
        self.setup_window()
        self.setup_styles()
        self.load_monster_data()
        self.create_widgets()
        
    def setup_window(self):
        self.root.title("Calculadora XP Ragnarok X - Professional Edition")
        self.root.geometry("1200x800")
        self.root.configure(bg='#1a1a1a')
        self.root.resizable(True, True)
        
        # Ícone da janela (se disponível)
        try:
            self.root.iconbitmap("icon.ico")
        except:
            pass
    
    def setup_styles(self):
        # Configurar estilo dark/gamer
        self.style = ttk.Style()
        self.style.theme_use('clam')
        
        # Cores do tema gamer
        self.colors = {
            'bg_primary': '#1a1a1a',
            'bg_secondary': '#2d2d2d',
            'bg_accent': '#3d3d3d',
            'text_primary': '#ffffff',
            'text_secondary': '#cccccc',
            'accent_blue': '#00d4ff',
            'accent_green': '#00ff88',
            'accent_red': '#ff4444',
            'accent_purple': '#8844ff'
        }
        
        # Configurar estilos personalizados
        self.style.configure('Dark.TFrame', background=self.colors['bg_primary'])
        self.style.configure('Card.TFrame', background=self.colors['bg_secondary'], relief='solid', borderwidth=1)
        self.style.configure('Dark.TLabel', background=self.colors['bg_primary'], foreground=self.colors['text_primary'], font=('Segoe UI', 10))
        self.style.configure('Title.TLabel', background=self.colors['bg_primary'], foreground=self.colors['accent_blue'], font=('Segoe UI', 16, 'bold'))
        self.style.configure('Subtitle.TLabel', background=self.colors['bg_primary'], foreground=self.colors['accent_green'], font=('Segoe UI', 12, 'bold'))
        
    def load_monster_data(self):
        try:
            with open('monster_data.json', 'r', encoding='utf-8') as f:
                self.monsters = json.load(f)
        except FileNotFoundError:
            messagebox.showerror("Erro", "Arquivo monster_data.json não encontrado!")
            self.monsters = {'pequenos': [], 'medios': [], 'grandes': []}
    
    def save_monster_data(self):
        try:
            with open('monster_data.json', 'w', encoding='utf-8') as f:
                json.dump(self.monsters, f, indent=2, ensure_ascii=False)
        except Exception as e:
            messagebox.showerror("Erro", f"Erro ao salvar dados: {str(e)}")
    
    def edit_monster_xp(self):
        if not hasattr(self, 'current_monster') or not self.current_monster:
            messagebox.showwarning("Aviso", "Selecione um monstro primeiro!")
            return
        
        # Criar janela de edição
        edit_window = tk.Toplevel(self.root)
        edit_window.title(f"Editar XP - {self.current_monster['name']}")
        edit_window.geometry("400x300")
        edit_window.configure(bg='#1a1a1a')
        edit_window.resizable(False, False)
        
        # Centralizar janela
        edit_window.transient(self.root)
        edit_window.grab_set()
        
        # Frame principal
        main_frame = ttk.Frame(edit_window, style='Dark.TFrame')
        main_frame.pack(fill='both', expand=True, padx=20, pady=20)
        
        # Título
        ttk.Label(main_frame, text=f"Editando: {self.current_monster['name']}", 
                 style='Title.TLabel').pack(pady=(0, 20))
        
        # Informações atuais
        info_frame = ttk.Frame(main_frame, style='Card.TFrame')
        info_frame.pack(fill='x', pady=(0, 20), padx=5, ipady=10)
        
        ttk.Label(info_frame, text="Valores Atuais:", style='Subtitle.TLabel').pack(pady=(0, 10))
        ttk.Label(info_frame, text=f"Base XP: {self.current_monster['base_xp']}", 
                 style='Dark.TLabel').pack()
        ttk.Label(info_frame, text=f"Job XP: {self.current_monster['job_xp']}", 
                 style='Dark.TLabel').pack()
        
        # Campos de edição
        edit_frame = ttk.Frame(main_frame, style='Card.TFrame')
        edit_frame.pack(fill='x', pady=(0, 20), padx=5, ipady=15)
        
        ttk.Label(edit_frame, text="Novos Valores:", style='Subtitle.TLabel').grid(row=0, column=0, columnspan=2, pady=(0, 10))
        
        ttk.Label(edit_frame, text="Base XP:", style='Dark.TLabel').grid(row=1, column=0, padx=10, pady=5, sticky='w')
        base_xp_var = tk.StringVar(value=str(self.current_monster['base_xp']))
        base_xp_entry = ttk.Entry(edit_frame, textvariable=base_xp_var, width=15)
        base_xp_entry.grid(row=1, column=1, padx=10, pady=5)
        
        ttk.Label(edit_frame, text="Job XP:", style='Dark.TLabel').grid(row=2, column=0, padx=10, pady=5, sticky='w')
        job_xp_var = tk.StringVar(value=str(self.current_monster['job_xp']))
        job_xp_entry = ttk.Entry(edit_frame, textvariable=job_xp_var, width=15)
        job_xp_entry.grid(row=2, column=1, padx=10, pady=5)
        
        # Botões
        button_frame = ttk.Frame(main_frame, style='Dark.TFrame')
        button_frame.pack(fill='x')
        
        def save_changes():
            try:
                new_base_xp = int(base_xp_var.get())
                new_job_xp = int(job_xp_var.get())
                
                if new_base_xp < 0 or new_job_xp < 0:
                    messagebox.showerror("Erro", "XP não pode ser negativo!")
                    return
                
                # Atualizar dados do monstro
                category = self.category_var.get()
                monster_name = self.current_monster['name']
                
                for monster in self.monsters[category]:
                    if monster['name'] == monster_name:
                        monster['base_xp'] = new_base_xp
                        monster['job_xp'] = new_job_xp
                        monster['odin_base'] = new_base_xp * 6  # Odin multiplica por 6
                        monster['odin_job'] = new_job_xp * 6
                        break
                
                # Salvar dados
                self.save_monster_data()
                
                # Atualizar interface
                self.update_monster_info()
                
                messagebox.showinfo("Sucesso", "XP atualizado com sucesso!")
                edit_window.destroy()
                
            except ValueError:
                messagebox.showerror("Erro", "Por favor, insira apenas números válidos!")
        
        def cancel_edit():
            edit_window.destroy()
        
        # Configurar estilo dos botões
        save_button = tk.Button(button_frame, text="Salvar", command=save_changes,
                               bg='#00ff88', fg='#000000', font=('Segoe UI', 10, 'bold'),
                               relief='flat', padx=20, pady=5)
        save_button.pack(side='left', padx=(0, 10))
        
        cancel_button = tk.Button(button_frame, text="Cancelar", command=cancel_edit,
                                 bg='#ff4444', fg='#ffffff', font=('Segoe UI', 10, 'bold'),
                                 relief='flat', padx=20, pady=5)
        cancel_button.pack(side='left')
    
    def show_recommendations(self):
        try:
            player_level = int(self.player_level_var.get())
            if player_level < 1 or player_level > 150:
                messagebox.showwarning("Aviso", "Por favor, insira um nível entre 1 e 150!")
                return
                
            recommendations = self.get_recommendations(player_level)
            self.display_recommendations(recommendations)
            
        except ValueError:
            messagebox.showwarning("Aviso", "Por favor, insira um nível válido!")
    
    def get_recommendations(self, player_level):
        recommendations = {'afk': [], 'odin': []}
        
        for category in self.monsters:
            for monster in self.monsters[category]:
                # Considerar monstros até 20 níveis acima e 5 abaixo do player
                if monster['level'] <= player_level + 20 and monster['level'] >= player_level - 5:
                    efficiency = self.calculate_efficiency(monster, player_level)
                    
                    recommendations['afk'].append({
                        **monster,
                        'category': category,
                        'xp_per_hour': efficiency['afk_xp_per_hour']
                    })
                    
                    recommendations['odin'].append({
                        **monster,
                        'category': category,
                        'xp_per_hour': efficiency['odin_xp_per_hour']
                    })
        
        # Ordenar por XP por hora e pegar os top 10
        recommendations['afk'].sort(key=lambda x: x['xp_per_hour'], reverse=True)[:10]
        recommendations['odin'].sort(key=lambda x: x['xp_per_hour'], reverse=True)[:10]
        
        return recommendations
    
    def calculate_efficiency(self, monster, player_level):
        # Penalidade por diferença de nível
        level_diff = abs(monster['level'] - player_level)
        penalty = max(0.3, 1 - (level_diff * 0.05))
        
        # Assumir 6 segundos por kill
        kill_time = 6
        kills_per_hour = 3600 / kill_time
        
        afk_xp_per_hour = (monster['base_xp'] + monster['job_xp']) * kills_per_hour * penalty
        odin_xp_per_hour = (monster['odin_base'] + monster['odin_job']) * kills_per_hour * penalty
        
        return {
            'afk_xp_per_hour': int(afk_xp_per_hour),
            'odin_xp_per_hour': int(odin_xp_per_hour)
        }
    
    def display_recommendations(self, recommendations):
        # Criar janela de recomendações
        rec_window = tk.Toplevel(self.root)
        rec_window.title("🎯 Melhores Opções de Farm")
        rec_window.geometry("800x600")
        rec_window.configure(bg='#1a1a1a')
        
        # Centralizar janela
        rec_window.transient(self.root)
        rec_window.grab_set()
        
        # Frame principal
        main_frame = ttk.Frame(rec_window, style='Dark.TFrame')
        main_frame.pack(fill='both', expand=True, padx=20, pady=20)
        
        # Título
        ttk.Label(main_frame, text="🎯 MELHORES OPÇÕES DE FARM", 
                 style='Title.TLabel').pack(pady=(0, 20))
        
        # Notebook para abas
        notebook = ttk.Notebook(main_frame)
        notebook.pack(fill='both', expand=True)
        
        # Aba AFK
        afk_frame = ttk.Frame(notebook, style='Dark.TFrame')
        notebook.add(afk_frame, text='🎯 Farm AFK')
        
        afk_text = tk.Text(afk_frame, height=20, width=80, 
                          bg=self.colors['bg_accent'], fg=self.colors['text_primary'],
                          font=('Consolas', 10), relief='flat')
        afk_text.pack(padx=10, pady=10, fill='both', expand=True)
        
        afk_content = "🎯 TOP 10 - FARM AFK\n" + "="*50 + "\n\n"
        for i, monster in enumerate(recommendations['afk'], 1):
            name = monster.get('name_pt', monster['name'])
            afk_content += f"{i:2d}. {name} (Lv.{monster['level']})\n"
            afk_content += f"    📍 {monster['location']}\n"
            afk_content += f"    ⚡ {monster['xp_per_hour']:,} XP/h\n"
            afk_content += f"    🎯 Base: {monster['base_xp']:,} | Job: {monster['job_xp']:,}\n\n"
        
        afk_text.insert('1.0', afk_content)
        afk_text.config(state='disabled')
        
        # Aba Odin
        odin_frame = ttk.Frame(notebook, style='Dark.TFrame')
        notebook.add(odin_frame, text='⚡ Farm com Bênção')
        
        odin_text = tk.Text(odin_frame, height=20, width=80, 
                           bg=self.colors['bg_accent'], fg=self.colors['text_primary'],
                           font=('Consolas', 10), relief='flat')
        odin_text.pack(padx=10, pady=10, fill='both', expand=True)
        
        odin_content = "⚡ TOP 10 - FARM COM BÊNÇÃO\n" + "="*50 + "\n\n"
        for i, monster in enumerate(recommendations['odin'], 1):
            name = monster.get('name_pt', monster['name'])
            blessing_cost = {'pequenos': 1, 'medios': 2, 'grandes': 3}[monster['category']]
            odin_content += f"{i:2d}. {name} (Lv.{monster['level']})\n"
            odin_content += f"    📍 {monster['location']}\n"
            odin_content += f"    ⚡ {monster['xp_per_hour']:,} XP/h\n"
            odin_content += f"    🎯 Base: {monster['odin_base']:,} | Job: {monster['odin_job']:,}\n"
            odin_content += f"    💰 {blessing_cost} bênção(ões) por morte\n\n"
        
        odin_text.insert('1.0', odin_content)
        odin_text.config(state='disabled')
        
    def create_widgets(self):
        # Frame principal
        main_frame = ttk.Frame(self.root, style='Dark.TFrame')
        main_frame.pack(fill='both', expand=True, padx=10, pady=10)
        
        # Título
        title_label = ttk.Label(main_frame, text="🗡️ CALCULADORA XP RAGNAROK X 🗡️", style='Title.TLabel')
        title_label.pack(pady=(0, 20))
        
        # Frame superior com controles
        controls_frame = ttk.Frame(main_frame, style='Card.TFrame')
        controls_frame.pack(fill='x', pady=(0, 20), padx=5, ipady=15)
        
        # Seleção de categoria
        ttk.Label(controls_frame, text="Categoria do Monstro:", style='Subtitle.TLabel').grid(row=0, column=0, padx=10, pady=5, sticky='w')
        self.category_var = tk.StringVar(value='pequenos')
        category_combo = ttk.Combobox(controls_frame, textvariable=self.category_var, 
                                     values=['pequenos', 'medios', 'grandes'], state='readonly', width=15)
        category_combo.grid(row=0, column=1, padx=10, pady=5)
        category_combo.bind('<<ComboboxSelected>>', self.update_monster_list)
        
        # Seleção de monstro
        ttk.Label(controls_frame, text="Monstro:", style='Subtitle.TLabel').grid(row=0, column=2, padx=10, pady=5, sticky='w')
        self.monster_var = tk.StringVar()
        self.monster_combo = ttk.Combobox(controls_frame, textvariable=self.monster_var, state='readonly', width=20)
        self.monster_combo.grid(row=0, column=3, padx=10, pady=5)
        self.monster_combo.bind('<<ComboboxSelected>>', self.update_monster_info)
        
        # Tempo de morte
        ttk.Label(controls_frame, text="Tempo para matar (segundos):", style='Subtitle.TLabel').grid(row=1, column=0, padx=10, pady=5, sticky='w')
        self.kill_time_var = tk.StringVar(value='5')
        kill_time_entry = ttk.Entry(controls_frame, textvariable=self.kill_time_var, width=10)
        kill_time_entry.grid(row=1, column=1, padx=10, pady=5)
        
        # Tipo de farm
        ttk.Label(controls_frame, text="Tipo de Farm:", style='Subtitle.TLabel').grid(row=1, column=2, padx=10, pady=5, sticky='w')
        self.farm_type_var = tk.StringVar(value='afk')
        farm_type_combo = ttk.Combobox(controls_frame, textvariable=self.farm_type_var, 
                                      values=['afk', 'odin'], state='readonly', width=15)
        farm_type_combo.grid(row=1, column=3, padx=10, pady=5)
        
        # Botão calcular
        calc_button = tk.Button(controls_frame, text="🧮 CALCULAR XP", 
                               command=self.calculate_xp, bg=self.colors['accent_blue'], 
                               fg='white', font=('Segoe UI', 11, 'bold'), 
                               relief='flat', padx=20, pady=8)
        calc_button.grid(row=1, column=4, padx=10, pady=5)
        
        # Botão editar XP
        edit_button = tk.Button(controls_frame, text="✏️ EDITAR XP", 
                               command=self.edit_monster_xp, bg=self.colors['accent_green'], 
                               fg='white', font=('Segoe UI', 11, 'bold'), 
                               relief='flat', padx=20, pady=8)
        edit_button.grid(row=1, column=5, padx=10, pady=5)
        
        # Nova linha para recomendações
        ttk.Label(controls_frame, text="Seu Nível:", style='Subtitle.TLabel').grid(row=2, column=0, padx=10, pady=5, sticky='w')
        self.player_level_var = tk.StringVar(value='1')
        level_entry = ttk.Entry(controls_frame, textvariable=self.player_level_var, width=10)
        level_entry.grid(row=2, column=1, padx=10, pady=5)
        
        # Botão de recomendações
        recommend_button = tk.Button(controls_frame, text="🎯 MELHORES OPÇÕES", 
                                   command=self.show_recommendations, bg=self.colors['accent_purple'], 
                                   fg='white', font=('Segoe UI', 11, 'bold'), 
                                   relief='flat', padx=20, pady=8)
        recommend_button.grid(row=2, column=2, columnspan=2, padx=10, pady=5)
        
        # Frame do meio com informações do monstro e bênçãos
        middle_frame = ttk.Frame(main_frame, style='Dark.TFrame')
        middle_frame.pack(fill='x', pady=(0, 20))
        
        # Info do monstro (esquerda)
        monster_info_frame = ttk.Frame(middle_frame, style='Card.TFrame')
        monster_info_frame.pack(side='left', fill='both', expand=True, padx=(0, 10), pady=5, ipady=15)
        
        ttk.Label(monster_info_frame, text="📊 INFORMAÇÕES DO MONSTRO", style='Subtitle.TLabel').pack(pady=(10, 15))
        self.monster_info_text = tk.Text(monster_info_frame, height=8, width=40, 
                                        bg=self.colors['bg_accent'], fg=self.colors['text_primary'],
                                        font=('Consolas', 10), relief='flat')
        self.monster_info_text.pack(padx=15, pady=(0, 15))
        
        # Bênçãos info (direita)
        blessing_frame = ttk.Frame(middle_frame, style='Card.TFrame')
        blessing_frame.pack(side='right', fill='both', expand=True, padx=(10, 0), pady=5, ipady=15)
        
        ttk.Label(blessing_frame, text="✨ SISTEMA DE BÊNÇÃOS", style='Subtitle.TLabel').pack(pady=(10, 15))
        
        blessing_info = """
🔹 PEQUENOS: 1 Bênção de Odim
🔸 MÉDIOS: 2 Bênçãos de Odim  
🔺 GRANDES: 3 Bênçãos de Odim

💡 Farm com Bênção de Odim:
   • +5x XP Base e Job
   • +5x Drops de itens
   
⏰ Farm AFK (sem bênção):
   • XP base do monstro
   • Calculado por tempo
        """
        
        blessing_text = tk.Text(blessing_frame, height=8, width=40, 
                               bg=self.colors['bg_accent'], fg=self.colors['text_secondary'],
                               font=('Segoe UI', 9), relief='flat')
        blessing_text.pack(padx=15, pady=(0, 15))
        blessing_text.insert('1.0', blessing_info)
        blessing_text.config(state='disabled')
        
        # Frame de resultados
        results_frame = ttk.Frame(main_frame, style='Card.TFrame')
        results_frame.pack(fill='both', expand=True, padx=5, pady=5, ipady=20)
        
        ttk.Label(results_frame, text="📈 RESULTADOS DO CÁLCULO", style='Subtitle.TLabel').pack(pady=(15, 20))
        
        # Frame para os cards de resultado
        results_cards_frame = ttk.Frame(results_frame, style='Dark.TFrame')
        results_cards_frame.pack(fill='x', padx=20)
        
        # Card XP por morte
        xp_per_kill_frame = tk.Frame(results_cards_frame, bg=self.colors['accent_green'], relief='solid', bd=2)
        xp_per_kill_frame.pack(side='left', fill='both', expand=True, padx=(0, 10), pady=10, ipady=15)
        
        tk.Label(xp_per_kill_frame, text="XP POR MORTE", bg=self.colors['accent_green'], 
                fg='white', font=('Segoe UI', 12, 'bold')).pack(pady=(10, 5))
        self.xp_per_kill_label = tk.Label(xp_per_kill_frame, text="Base: 0\nJob: 0", 
                                         bg=self.colors['accent_green'], fg='white', 
                                         font=('Segoe UI', 11))
        self.xp_per_kill_label.pack(pady=(0, 10))
        
        # Card XP por minuto
        xp_per_min_frame = tk.Frame(results_cards_frame, bg=self.colors['accent_blue'], relief='solid', bd=2)
        xp_per_min_frame.pack(side='left', fill='both', expand=True, padx=5, pady=10, ipady=15)
        
        tk.Label(xp_per_min_frame, text="XP POR MINUTO", bg=self.colors['accent_blue'], 
                fg='white', font=('Segoe UI', 12, 'bold')).pack(pady=(10, 5))
        self.xp_per_min_label = tk.Label(xp_per_min_frame, text="Base: 0\nJob: 0", 
                                        bg=self.colors['accent_blue'], fg='white', 
                                        font=('Segoe UI', 11))
        self.xp_per_min_label.pack(pady=(0, 10))
        
        # Card XP por hora
        xp_per_hour_frame = tk.Frame(results_cards_frame, bg=self.colors['accent_purple'], relief='solid', bd=2)
        xp_per_hour_frame.pack(side='left', fill='both', expand=True, padx=(10, 0), pady=10, ipady=15)
        
        tk.Label(xp_per_hour_frame, text="XP POR HORA", bg=self.colors['accent_purple'], 
                fg='white', font=('Segoe UI', 12, 'bold')).pack(pady=(10, 5))
        self.xp_per_hour_label = tk.Label(xp_per_hour_frame, text="Base: 0\nJob: 0", 
                                         bg=self.colors['accent_purple'], fg='white', 
                                         font=('Segoe UI', 11))
        self.xp_per_hour_label.pack(pady=(0, 10))
        
        # Seção de bênçãos necessárias
        blessing_calc_frame = ttk.Frame(results_frame, style='Dark.TFrame')
        blessing_calc_frame.pack(fill='x', padx=20, pady=(20, 0))
        
        self.blessing_result_label = tk.Label(blessing_calc_frame, text="", 
                                            bg=self.colors['bg_primary'], fg=self.colors['accent_red'], 
                                            font=('Segoe UI', 11, 'bold'))
        self.blessing_result_label.pack()
        
        # Inicializar lista de monstros
        self.update_monster_list()
        
    def update_monster_list(self, event=None):
        category = self.category_var.get()
        monsters = self.monsters[category]
        monster_names = [f"{m.get('name_pt', m['name'])} (Lv.{m['level']})" for m in monsters]
        self.monster_combo['values'] = monster_names
        if monster_names:
            self.monster_combo.set(monster_names[0])
            self.update_monster_info()
    
    def update_monster_info(self, event=None):
        if not self.monster_var.get():
            return
            
        category = self.category_var.get()
        selected_name = self.monster_var.get().split(' (Lv.')[0]
        
        monster = None
        for m in self.monsters[category]:
            if m['name'] == selected_name:
                monster = m
                break
        
        if monster:
            self.current_monster = monster  # Armazenar monstro atual para edição
            monster_name = monster.get('name_pt', monster['name'])
            info_text = f"""
Monstro: {monster_name}
Level: {monster['level']}
Localização: {monster['location']}
Elemento: {monster['element']}
Tamanho: {monster['size']}

XP SEM BÊNÇÃO:
Base: {monster['base_xp']:,}
Job: {monster['job_xp']:,}

XP COM BÊNÇÃO ODIM:
Base: {monster['odin_base']:,}
Job: {monster['odin_job']:,}
            """
            
            self.monster_info_text.delete('1.0', tk.END)
            self.monster_info_text.insert('1.0', info_text.strip())
    
    def calculate_xp(self):
        try:
            if not self.monster_var.get():
                messagebox.showwarning("Aviso", "Selecione um monstro!")
                return
                
            kill_time = float(self.kill_time_var.get())
            if kill_time <= 0:
                messagebox.showwarning("Aviso", "Tempo deve ser maior que 0!")
                return
                
            category = self.category_var.get()
            selected_name = self.monster_var.get().split(' (Lv.')[0]
            farm_type = self.farm_type_var.get()
            
            monster = None
            for m in self.monsters[category]:
                if m['name'] == selected_name:
                    monster = m
                    break
            
            if not monster:
                messagebox.showerror("Erro", "Monstro não encontrado!")
                return
            
            # Calcular XP baseado no tipo de farm
            if farm_type == 'afk':
                base_xp = monster['base_xp']
                job_xp = monster['job_xp']
            else:  # odin
                base_xp = monster['odin_base']
                job_xp = monster['odin_job']
            
            # Calcular rates
            kills_per_minute = 60 / kill_time
            kills_per_hour = 3600 / kill_time
            
            xp_base_per_min = base_xp * kills_per_minute
            xp_job_per_min = job_xp * kills_per_minute
            
            xp_base_per_hour = base_xp * kills_per_hour
            xp_job_per_hour = job_xp * kills_per_hour
            
            # Atualizar interface
            self.xp_per_kill_label.config(text=f"Base: {base_xp:,}\nJob: {job_xp:,}")
            self.xp_per_min_label.config(text=f"Base: {xp_base_per_min:,.0f}\nJob: {xp_job_per_min:,.0f}")
            self.xp_per_hour_label.config(text=f"Base: {xp_base_per_hour:,.0f}\nJob: {xp_job_per_hour:,.0f}")
            
            # Calcular bênçãos necessárias se for farm Odin
            if farm_type == 'odin':
                blessing_per_kill = {'pequenos': 1, 'medios': 2, 'grandes': 3}[category]
                blessings_per_hour = blessing_per_kill * kills_per_hour
                
                blessing_text = f"⚡ Bênçãos necessárias: {blessing_per_kill} por morte | {blessings_per_hour:,.0f} por hora"
                if blessings_per_hour > 2000:
                    blessing_text += f"\n⚠️ ATENÇÃO: Excede o limite diário de 2000 bênçãos!"
            else:
                blessing_text = "💡 Farm AFK - Sem uso de bênçãos"
            
            self.blessing_result_label.config(text=blessing_text)
            
        except ValueError:
            messagebox.showerror("Erro", "Digite um valor numérico válido para o tempo!")
        except Exception as e:
            messagebox.showerror("Erro", f"Erro no cálculo: {str(e)}")

def main():
    root = tk.Tk()
    app = RagnarokXPCalculator(root)
    root.mainloop()

if __name__ == "__main__":
    main()