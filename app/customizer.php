<?php

/**
 * customizer.php
 *
 * Custom WordPress Customizer fields
 *
 **/

namespace App;

use WP_Customize_Media_Control;

/**
 * Custom Customizer fields
 *
 * @param $wp_customize
 */
function resource_customize($wp_customize)
{
    /**
     * Logo
     */
    $wp_customize->add_setting('primary_logo_setting', array(
        'sanitize_callback' => 'absint'
    ));

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'primary_logo_control',
            array(
                'label' => __('Main Site Logo', 'rage'),
                'section' => 'title_tagline',
                'settings' => 'primary_logo_setting',
            )
        )
    );

    /**
     * Site-wide Information Panel
     */
    $wp_customize->add_section('site_wide_info', [
        'capability' => 'edit_theme_options',
        'title' => __('Site-wide Information', 'rage'),
        'description' => sprintf(__('Site-wide Information', 'rage')),
        'priority' => 90,
    ]);

    /**
     * Address
     */
    $wp_customize->add_setting('address_setting', [
        'default' => '',
        'sanitize_callback' => '',
    ]);

    $wp_customize->add_control('address_control', [
        'label' => __('Address', 'rage'),
        'section' => 'site_wide_info',
        'settings' => 'address_setting',
        'type' => 'textarea',
    ]);

    /**
     * Google Maps API Key
     */
    $wp_customize->add_setting('google_maps_api_setting', [
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_control('google_maps_api_control', [
        'label' => __('Google Maps API Key', 'rage'),
        'section' => 'site_wide_info',
        'settings' => 'google_maps_api_setting',
        'type' => 'text',
    ]);

    /**
     * Google Maps Link
     */
    $wp_customize->add_setting('google_maps_setting', [
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ]);

    $wp_customize->add_control('google_maps_control', [
        'label' => __('Google Maps Address Link', 'rage'),
        'section' => 'site_wide_info',
        'settings' => 'google_maps_setting',
        'type' => 'url',
    ]);

    /**
     * Google Maps Latitude
     */
    $wp_customize->add_setting('google_maps_latitude', [
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_control('google_maps_latitude_control', [
        'label' => __('Google Maps Latitude', 'rage'),
        'section' => 'site_wide_info',
        'settings' => 'google_maps_latitude',
        'type' => 'number',
    ]);

    /**
     * Google Maps Longitude
     */
    $wp_customize->add_setting('google_maps_longitude', [
        'default' => '',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_control('google_maps_longitude_control', [
        'label' => __('Google Maps Longitude', 'rage'),
        'section' => 'site_wide_info',
        'settings' => 'google_maps_longitude',
        'type' => 'number',
    ]);
}

add_action('customize_register', __NAMESPACE__ . '\\resource_customize');
