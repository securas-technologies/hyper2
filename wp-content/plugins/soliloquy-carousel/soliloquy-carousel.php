<?php
/**
 * Plugin Name: Soliloquy - Carousel Addon
 * Plugin URI:  https://soliloquywp.com
 * Description: Enables carousel display for Soliloquy sliders.
 * Author:      Soliloquy Team
 * Author URI:  https://soliloquywp.com
 * Version:     2.2.2
 * Text Domain: soliloquy-carousel
 * Domain Path: languages
 *
 * @package SoliloquyWP
 * @subpackage Soliloquy Carousel
 *
 * Soliloquy is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * Soliloquy is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Soliloquy. If not, see <http://www.gnu.org/licenses/>.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Soliloquy Carousel Class.
 *
 * @since 2.2.0
 */
class Soliloquy_Carousel {
	/**
	 * Holds the class object.
	 *
	 * @since 2.2.0
	 *
	 * @var object
	 */
	public static $instance;

	/**
	 * Plugin version, used for cache-busting of style and script file references.
	 *
	 * @since 2.2.0
	 *
	 * @var string
	 */
	public $version = '2.2.2';

	/**
	 * The name of the plugin.
	 *
	 * @since 2.2.0
	 *
	 * @var string
	 */
	public $plugin_name = 'Soliloquy - Carousel Addon';

	/**
	 * Unique plugin slug identifier.
	 *
	 * @since 2.2.0
	 *
	 * @var string
	 */
	public $plugin_slug = 'soliloquy-carousel';

	/**
	 * Plugin file.
	 *
	 * @since 2.2.0
	 *
	 * @var string
	 */
	public $file = __FILE__;

	/**
	 * Primary class constructor.
	 *
	 * @since 2.2.0
	 */
	public function __construct() {

		// Load the plugin textdomain.
		add_action( 'plugins_loaded', array( $this, 'load_plugin_textdomain' ) );

		// Load the plugin.
		add_action( 'soliloquy_init', array( $this, 'init' ), 99 );

	}
	/**
	 * Loads the plugin textdomain for translation.
	 *
	 * @since 2.2.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain( $this->plugin_slug, false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );

	}

	/**
	 * Init Method.
	 *
	 * @since 2.2.0
	 *
	 * @return void
	 */
	public function init() {

		// Load admin only components.
		if ( is_admin() ) {

			$this->require_admin();

		}

		// Load global components.
		$this->require_global();

		// Load the updater.
		add_action( 'soliloquy_updater', array( $this, 'updater' ) );

	}

	/**
	 * Loads all admin related files into scope.
	 *
	 * @since 2.2.0
	 */
	public function require_admin() {

		require plugin_dir_path( __FILE__ ) . 'includes/admin/metaboxes.php';

	}

	/**
	 * Initializes the addon updater.
	 *
	 * @since 2.2.0
	 *
	 * @param string $key The user license key.
	 */
	public function updater( $key ) {

		$args = array(
			'plugin_name' => $this->plugin_name,
			'plugin_slug' => $this->plugin_slug,
			'plugin_path' => plugin_basename( __FILE__ ),
			'plugin_url'  => trailingslashit( WP_PLUGIN_URL ) . $this->plugin_slug,
			'remote_url'  => 'http://soliloquywp.com/',
			'version'     => $this->version,
			'key'         => $key,
		);

		$this->soliloquy_carousel = new Soliloquy_Updater( $args );

	}
	/**
	 * Loads all global files into scope.
	 *
	 * @since 2.2.0
	 */
	public function require_global() {

		require plugin_dir_path( __FILE__ ) . 'includes/global/shortcode.php';

	}
	/**
	 * Returns the singleton instance of the class.
	 *
	 * @since 2.2.0
	 *
	 * @return object The Soliloquy object.
	 */
	public static function get_instance() {

		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Soliloquy_Carousel ) ) {
			self::$instance = new Soliloquy_Carousel();
		}

		return self::$instance;

	}

}

$soliloquy_carousel = Soliloquy_Carousel::get_instance();
