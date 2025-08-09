# Template de Site de Turismo - Sistema de Configuração

Este projeto é um **template reutilizável** para criar sites de agências de turismo. Você pode personalizar completamente o site editando apenas um arquivo Markdown e adicionando suas imagens.

## 🚀 Como Usar

### 1. Clone o Repositório
```bash
git clone [url-do-repositorio]
cd jastur
npm install
```

### 2. Configure o Site

#### 📝 Edite o arquivo `SITE_CONFIG.md`
Este arquivo contém TODAS as informações do site:
- Dados da empresa (nome, slogan, contatos)
- Cores da marca
- Serviços oferecidos
- Destinos/Pacotes
- Depoimentos de clientes
- Perguntas frequentes
- Parceiros
- Configurações de SEO

#### 🖼️ Adicione suas Imagens
Organize suas imagens na pasta `assets/` seguindo esta estrutura:

```
assets/
├── logo/
│   └── sua-logo.png         # Logo da empresa
├── slides/
│   ├── slide1.jpg           # Imagens do carrossel principal
│   ├── slide2.jpg
│   └── slide3.jpg
├── destinations/
│   ├── destino1.jpg         # Fotos dos destinos
│   ├── destino2.jpg
│   └── destino3.jpg
├── partners/
│   ├── parceiro1.jpg        # Logos dos parceiros
│   └── parceiro2.jpg
└── gallery/
    └── outras-imagens.jpg   # Outras imagens do site
```

### 3. Gere o Site

Execute o comando de desenvolvimento:
```bash
npm run dev
```

O sistema irá automaticamente:
1. Ler o arquivo `SITE_CONFIG.md`
2. Processar todas as configurações
3. Copiar as imagens para os locais corretos
4. Gerar o arquivo de configuração TypeScript
5. Iniciar o servidor de desenvolvimento

### 4. Build para Produção

```bash
npm run build
```

## 📋 Estrutura do SITE_CONFIG.md

### Informações da Empresa
```markdown
## Informações da Empresa

### Dados Básicos
- **Nome**: Nome da Sua Empresa
- **Slogan**: Seu slogan aqui
- **CNPJ**: 00.000.000/0000-00
```

### Destinos/Pacotes
```markdown
## Destinos

### Nome do Destino
- **ID**: identificador-unico
- **Categoria**: Praia/Montanha/Natureza
- **Imagem**: destinations/foto-destino.jpg
- **Preço**: 500
- **Descrição**: Descrição do destino
```

### Cores Personalizadas
```markdown
## Cores da Marca
- **Primária**: #3b82f6
- **Secundária**: #f97316
- **Accent**: #64748b
```

## 🛠️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run config:update` | Processa o SITE_CONFIG.md e gera as configurações |
| `npm run dev` | Atualiza config e inicia o servidor de desenvolvimento |
| `npm run build` | Atualiza config e cria build de produção |
| `npm run preview` | Visualiza o build de produção |
| `npm run lint` | Executa o linter no código |

## 🎨 Personalizações Avançadas

### Modificar Componentes
Os componentes React estão em `src/components/ui/`. Você pode modificá-los para ajustar o layout ou adicionar funcionalidades.

### Adicionar Novas Seções
1. Adicione a seção no `SITE_CONFIG.md`
2. Atualize o parser em `scripts/generate-config.js`
3. Crie o componente React correspondente
4. Importe no `LandingPage.tsx`

### Integração WhatsApp
O site já vem com integração WhatsApp configurada. As mensagens podem ser personalizadas por seção no `SITE_CONFIG.md`:

```markdown
## Mensagens WhatsApp

### Padrão
Olá! Gostaria de saber mais sobre seus serviços.

### Orçamento
Olá! Gostaria de solicitar um orçamento.
```

## 📦 Tecnologias Utilizadas

- **React 19** com TypeScript
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Vite** como bundler
- **Marked** para processar Markdown

## 🤝 Suporte

Para dúvidas ou sugestões sobre o template, abra uma issue no repositório.

## 📄 Licença

Este template é livre para uso comercial e pessoal.

---

**Dica:** Mantenha sempre o `SITE_CONFIG.md` atualizado - ele é a única fonte de verdade para todo o conteúdo do site!