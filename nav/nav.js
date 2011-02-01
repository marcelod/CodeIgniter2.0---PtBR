function create_menu(basepath)
{
	var base = (basepath == 'null') ? '' : basepath;

	document.write(
		'<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr>' +
		'<td class="td" valign="top">' +

		'<ul>' +
		'<li><a href="'+base+'index.html">Home - Guia do Usuário</a></li>' +
		'<li><a href="'+base+'toc.html">Conteúdo</a></li>' +
		'</ul>' +

		'<h3>Informações Básicas</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/requirements.html">Requisitos do Servidor</a></li>' +
			'<li><a href="'+base+'license.html">Licença de Uso</a></li>' +
			'<li><a href="'+base+'changelog.html">Log de Alterações</a></li>' +
			'<li><a href="'+base+'general/credits.html">Créditos</a></li>' +
		'</ul>' +

		'<h3>Instalação</h3>' +
		'<ul>' +
			'<li><a href="'+base+'installation/downloads.html">Baixando o CodeIgniter</a></li>' +
			'<li><a href="'+base+'installation/index.html">Instruções de Instalação</a></li>' +
			'<li><a href="'+base+'installation/upgrading.html">Atualizar a partir da Versão Anterior</a></li>' +
			'<li><a href="'+base+'installation/troubleshooting.html">Resolução de Problemas</a></li>' +
		'</ul>' +

		'<h3>Introdução</h3>' +
		'<ul>' +
			'<li><a href="'+base+'overview/getting_started.html">Primeiros Passos</a></li>' +
			'<li><a href="'+base+'overview/at_a_glance.html">Visão Geral do CodeIgniter</a></li>' +
			'<li><a href="'+base+'overview/cheatsheets.html">CodeIgniter Cheatsheets</a></li>' +
			'<li><a href="'+base+'overview/features.html">Recursos Disponíveis</a></li>' +
			'<li><a href="'+base+'overview/appflow.html">Fluxograma da Aplicação</a></li>' +
			'<li><a href="'+base+'overview/mvc.html">Model-View-Controller</a></li>' +
			'<li><a href="'+base+'overview/goals.html">Objetivos da Arquitetura</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Assuntos Gerais</h3>' +
		'<ul>' +
			'<li><a href="'+base+'general/urls.html">CodeIgniter URLs</a></li>' +
			'<li><a href="'+base+'general/controllers.html">Controllers</a></li>' +
			'<li><a href="'+base+'general/reserved_names.html">Nomes Reservados</a></li>' +
			'<li><a href="'+base+'general/views.html">Views</a></li>' +
			'<li><a href="'+base+'general/models.html">Models</a></li>' +
			'<li><a href="'+base+'general/helpers.html">Helpers</a></li>' +
			'<li><a href="'+base+'general/libraries.html">Usando as Bibliotecas do CodeIgniter</a></li>' +
			'<li><a href="'+base+'general/creating_libraries.html">Criando Suas Próprias Bibliotecas</a></li>' +
			'<li><a href="'+base+'general/core_classes.html">Criando Classes do Núcleo</a></li>' +
			'<li><a href="'+base+'general/hooks.html">Ganchos - Estendendo o Núcleo</a></li>' +
			'<li><a href="'+base+'general/autoloader.html">Recursos de Autocarregamento</a></li>' +
			'<li><a href="'+base+'general/common_functions.html">Funções Comuns</a></li>' +
			'<li><a href="'+base+'general/routing.html">Roteamento URI</a></li>' +
			'<li><a href="'+base+'general/errors.html">Tratamento de Erros</a></li>' +
			'<li><a href="'+base+'general/caching.html">Cache</a></li>' +
			'<li><a href="'+base+'general/profiling.html">Perfil de Sua Aplicação</a></li>' +
			'<li><a href="'+base+'general/managing_apps.html">Gerenciando Aplicações</a></li>' +
			'<li><a href="'+base+'general/alternative_php.html">Sintaxe PHP Alternativa</a></li>' +
			'<li><a href="'+base+'general/security.html">Segurança</a></li>' +
			'<li><a href="'+base+'general/styleguide.html">Guia de Estilo PHP</a></li>' +
			'<li><a href="'+base+'doc_style/index.html">Escrevendo Documentação</a></li>' +
		'</ul>' +

		'<h3>Recursos Adicionais</h3>' +
		'<ul>' +
		'<li><a href="http://codeigniter.com/forums/">Fóruns</a></li>' +
		'<li><a href="http://codeigniter.com/wiki/">Wiki</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Referência de Classes</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/benchmark.html">Classe Benchmarking</a></li>' +
		'<li><a href="'+base+'libraries/calendar.html">Classe Calendário</a></li>' +
		'<li><a href="'+base+'libraries/cart.html">Classe Carrinho</a></li>' +
		'<li><a href="'+base+'libraries/config.html">Classe Config</a></li>' +
		'<li><a href="'+base+'libraries/email.html">Classe E-mail</a></li>' +
		'<li><a href="'+base+'libraries/encryption.html">Classe Criptografia</a></li>' +
		'<li><a href="'+base+'libraries/file_uploading.html">Classe Upload de Arquivo</a></li>' +
		'<li><a href="'+base+'libraries/form_validation.html">Classe Validação de Formulário</a></li>' +
		'<li><a href="'+base+'libraries/ftp.html">Classe FTP</a></li>' +
		'<li><a href="'+base+'libraries/table.html">Classe Tabela HTML</a></li>' +
		'<li><a href="'+base+'libraries/image_lib.html">Classe Manipulação de Imagem</a></li>' +
		'<li><a href="'+base+'libraries/input.html">Classe Input</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Classe Javascript</a></li>' +
		'<li><a href="'+base+'libraries/loader.html">Classe Loader</a></li>' +
		'<li><a href="'+base+'libraries/language.html">Classe Idioma</a></li>' +
		'<li><a href="'+base+'libraries/output.html">Classe Output</a></li>' +
		'<li><a href="'+base+'libraries/pagination.html">Classe Paginação</a></li>' +
		'<li><a href="'+base+'libraries/security.html">Classe Segurança</a></li>' +
		'<li><a href="'+base+'libraries/sessions.html">Classe Sessão</a></li>' +
		'<li><a href="'+base+'libraries/trackback.html">Classe Trackback</a></li>' +
		'<li><a href="'+base+'libraries/parser.html">Classe Template Parser</a></li>' +
		'<li><a href="'+base+'libraries/typography.html">Classe de Tipografia</a></li>' +
		'<li><a href="'+base+'libraries/unit_testing.html">Classe Teste Unitário</a></li>' +
		'<li><a href="'+base+'libraries/uri.html">Classe URI</a></li>' +
		'<li><a href="'+base+'libraries/user_agent.html">Classe Agente do Usuário</a></li>' +
		'<li><a href="'+base+'libraries/xmlrpc.html">Classe XML-RPC</a></li>' +
		'<li><a href="'+base+'libraries/zip.html">Classe Zip Encoding</a></li>' +
		'</ul>' +

		'</td><td class="td_sep" valign="top">' +

		'<h3>Driver de Referência</h3>' +
		'<ul>' +
		'<li><a href="'+base+'libraries/caching.html">Classe Caching</a></li>' +
		'<li><a href="'+base+'database/index.html">Classe de Banco de Dados</a></li>' +
		'<li><a href="'+base+'libraries/javascript.html">Classe Javascript</a></li>' +
		'</ul>' +

		'<h3>Referências dos Assistentes</h3>' +
		'<ul>' +
		'<li><a href="'+base+'helpers/array_helper.html">Assistente de Array</a></li>' +
		'<li><a href="'+base+'helpers/captcha_helper.html">Assistente de CAPTCHA</a></li>' +
		'<li><a href="'+base+'helpers/cookie_helper.html">Assistente de Cookie</a></li>' +
		'<li><a href="'+base+'helpers/date_helper.html">Assistente de Data</a></li>' +
		'<li><a href="'+base+'helpers/directory_helper.html">Assistente de Diretório</a></li>' +
		'<li><a href="'+base+'helpers/download_helper.html">Assistente de Download</a></li>' +
		'<li><a href="'+base+'helpers/email_helper.html">Assistente de E-mail</a></li>' +
		'<li><a href="'+base+'helpers/file_helper.html">Assistente de Arquivo</a></li>' +
		'<li><a href="'+base+'helpers/form_helper.html">Assistente de Formulário</a></li>' +
		'<li><a href="'+base+'helpers/html_helper.html">Assistente de HTML</a></li>' +
		'<li><a href="'+base+'helpers/inflector_helper.html">Assistente de Flexão Gramatical</a></li>' +
		'<li><a href="'+base+'helpers/language_helper.html">Assistente de Idioma</a></li>' +
		'<li><a href="'+base+'helpers/number_helper.html">Assistente de Número</a></li>' +
		'<li><a href="'+base+'helpers/path_helper.html">Assistente de Path</a></li>' +
		'<li><a href="'+base+'helpers/security_helper.html">Assistente de Segurança</a></li>' +
		'<li><a href="'+base+'helpers/smiley_helper.html">Assistente de Smiley</a></li>' +
		'<li><a href="'+base+'helpers/string_helper.html">Assistente de String</a></li>' +
		'<li><a href="'+base+'helpers/text_helper.html">Assistente de Texto</a></li>' +
		'<li><a href="'+base+'helpers/typography_helper.html">Assistente de Tipografia</a></li>' +
		'<li><a href="'+base+'helpers/url_helper.html">Assistente de URL</a></li>' +
		'<li><a href="'+base+'helpers/xml_helper.html">Assistente de XML</a></li>' +
                '</ul>' +

		'</td></tr></table>');
}