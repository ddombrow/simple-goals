// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use chrono::{Local, DateTime, NaiveDate};
use serde::{Deserialize, Serialize};
//use serde_json::Result;

#[derive(Serialize, Deserialize)]
pub struct Person {
    name: String,
    age: u8,
    phones: Vec<String>,
}

impl Person {
    // Constructs a new instance of [`Second`].
    // Note this is an associated function - no self.
    pub fn new(name: &str) -> Self {
        Person {
            name: name.to_string(), 
            age: 0,
            phones: vec![] 
        }
    }
}

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_todays_date() -> NaiveDate {
    let dt: DateTime<Local> = Local::now();
    dt.date_naive()
}

#[tauri::command]
fn greet(name: &str) -> Vec<Person> {
    let p: Person = Person::new(name);
    let mut many_p = Vec::new();
    many_p.push(p);
    many_p
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_todays_date])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
